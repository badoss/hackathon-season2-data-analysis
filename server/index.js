const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 }); 

wss.on('connection', function connection(ws) { 
  ws.on('message', function incoming(message) {

    console.log('received: %s', message);

    if (message == 'hi') {
      //  block of code to be executed if condition1 is true
      ws.send("me  :" + message)
      ws.send('bot :  hi human !')
    } else if (message == 'พี่ต้นหล่อไหม') {
      //  block of code to be executed if the condition1 is false and condition2 is true
      ws.send("me  :" + message)
      ws.send("bot : พี่ต้นสุดหล้อ")
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
      ws.send("me  :" + message)
      ws.send('bot :  บ้เข้าใจจจจจจ')
    }

  });
ws.on('close', function close() {

    console.log('disconnected');
  });
// ws.send('init message to client');

});