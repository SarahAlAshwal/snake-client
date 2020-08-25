let connection;

const handleUserInput = function(stdin) {
  let message;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    else if (key === 's') {
      connection.write("Move: down");
    }
    else if (key === 'a') {
      connection.write("Move: left");
    }
    else if (key === 'd') {
      connection.write("Move: right");
    }
  });
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function (conn) {
   connection = conn; 
   const stdin = process.stdin; 
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
  
  handleUserInput(stdin);

  
   
   return stdin;
 }

 module.exports = {setupInput};