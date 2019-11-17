const feathers = require('@feathersjs/client')
const socketio = require('@feathersjs/socketio-client')
const auth = require('@feathersjs/authentication-client');
const io = require('socket.io-client');


function client(options){
  const api = feathers()
    .configure(
        socketio (
          io(options.url,{
            transports: ['websocket']
          }),
          {
            timeout: 20000
          }
        )
      )
    .configure(auth({ storage: window.localStorage }))
    const apiClient = api.authenticate().then(resp=> {
        return resp
    }).catch ( error => {
        return authenticate(api);
    })
    return  { api, apiClient }
}


function authenticate(app){
    app.authenticate({
        email: 'admin',
        password: 'password',
        strategy: 'local'
    }).then (  user => {
        return user
    }).catch ( error => {
        return error
    })
}

const server = feathers;

module.exports = {
  io,
  socketio,
  server,
  auth,
  client
}
