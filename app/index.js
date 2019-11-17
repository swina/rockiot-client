const feathers = require('@feathersjs/client')
const socketio = require('@feathersjs/socketio-client')
const auth = require('@feathersjs/authentication-client');
const io = require('socket.io-client');

// import myapi from './api'

//const socket = io('//localhost:3030',{
//  transports: ['websocket'],
  
//})// process.env.VUE_APP_APISERVER, {transports: ['websocket']})

//const iotiscool = feathers()
//  .configure(socketio(socket, {
//    timeout: 20000
//  }))
//  .configure(auth({ storage: window.localStorage }))
const server = feathers;

module.exports = {
  io,
  socketio,
  server,
  auth
}