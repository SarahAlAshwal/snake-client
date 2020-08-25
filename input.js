let connection;
const {MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT, MESSAGES } = require('./constants');

const handleUserInput = function(stdin) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === MOVE_UP) {
      connection.write("Move: up");
    } else if (key === MOVE_DOWN) {
      connection.write("Move: down");
    } else if (key === MOVE_LEFT) {
      connection.write("Move: left");
    } else if (key === MOVE_RIGHT) {
      connection.write("Move: right");
    } else if (key === 'f') {
      connection.write(`Say: ${MESSAGES[key]}`);
    } else if (key === 'x') {
      connection.write(`Say: ${MESSAGES[key]}`);
    } else if (key === 'g') {
      connection.write(`Say: ${MESSAGES[key]}`);
    }
  });
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput(stdin);

  
   
  return stdin;
};

module.exports = {setupInput};