# rockiot-client

```rockiot-client``` is a wrapper to easily connect a client (browser) to a ```rockiot-api``` server.


### Getting started

Copy the **build** folder and start a web server from the folder (you can use http-server).

A **rockiot-api** server is required in order to successfully test the client.


### Docs

#### Load the library
Include **rockiot.client.js** in your HTML page.

```
<script src="rockiot.client.js"></script>
```

#### Create the client

```
...
<!DOCTYPE html>
<html>
...

<script>
const client = rockiot.client({
  url: 'http://localhost:3030',
  login: {
    user: 'admin',
    password: 'password',
    strategy: 'local'
  },
  storage: window.localStorage,
  timeout: 5000
})
console.log ( client )
...
</script>
</body>
</html>
```


#### Subscribe to a topic

```
rockiot.topic('subscribe', {
  url: 'http://test.mosquitto.org',
  port: '1883',
  topic: 'rockiot/garden/outside',
  name: 'Home Garden'
}).then(resp=>{
  console.log ( resp )
})

```

#### Unsubscribe from a topic

```
rockiot.topic('unsubscribe', {
  url: 'http://test.mosquitto.org',
  port: '1883',
  topic: 'rockiot/garden/outside',
  name: 'Home Garden'
}).then(resp=>{
  console.log ( resp )
})

```

#### Get realtime data from the subscribed topics


```
client.api.service('mqtt/realtime').on('payload', (payload) => {
  console.log ( 'payload=>' , payload )
})
```
