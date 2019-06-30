console.log("Hello nigeria");

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('You called an event listener', data))

logger.log('Anselm');