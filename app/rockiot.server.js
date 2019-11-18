const feathers = require('@feathersjs/client')
const socketio = require('@feathersjs/socketio-client')
const auth = require('@feathersjs/authentication-client');
const io = require('socket.io-client');

var options = {
  url: 'http://localhost:3030',
  login: {
    email: 'admin',
    password: 'password',
    strategy: 'local'
  },
  storage: window.localStorage,
  timeout: 5000
}

var app

function client(options){
  const api = feathers()
    .configure(
        socketio (
          io(options.url,{
            transports: ['websocket']
          }),
          {
            timeout: options.timeout
          }
        )
      )
    .configure(auth({ storage: window.localStorage }))
    const apiClient =  api.authenticate().then(resp=> {
        return resp
    }).catch ( error => {
        console.log ( 'login default=>' , options.login  )
        api.authenticate({
          email: options.login.user,
          password: options.login.password,
          strategy: options.login.strategy
        }).then(user=>{
          console.log ( user )
          return user
        }).catch ( err=> {
          return err
        })
    })
    app = api
    return  { api, apiClient }
}


function authenticate(authServer,options){
    authServer.authenticate(
      options.login
    ).then ( user => {
      console.log ( 'authenticated')
      return user
    }).catch ( error => {
        return error
    })
}

async function realtime(){
  return app.service('gateway/realtime').on('payload',function(payload){
    return payload
  })
}

async function topic( action , topic){
  const response = await app.service('topic/' + action ).create(topic).then(resp=>{
    return resp
  }).catch ( error => {
    return error
  })
  return response
}



const server = feathers;

module.exports = {
  io,
  socketio,
  server,
  auth,
  client,
  topic,
  realtime
}
