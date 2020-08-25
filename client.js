const net = require('net');
const name = 'SAM'

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${name}`);
  });

// //we also can use setTimeout (() => {
//   conn.write('Move: up')
// }, 1000 * i) where i could index of a for loop
  //   conn.on('connect', () => {
//    setInterval(() => {
//     conn.write('Move: up')
//    }, 1000);
// });

  conn.on('data', (message) => {
    console.log(message);
  })

  return conn;
}

module.exports = connect;