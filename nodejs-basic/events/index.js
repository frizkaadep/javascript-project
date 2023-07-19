// TODO 1
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
const myEventEmitter = new EventEmitter();

  // TODO 3
myEventEmitter.on('birthday', birthdayEventListener);

   
  // TODO 4
myEventEmitter.emit('birthday', 'Frizka Ade');

// jalankan di command promt
// node ./nodejs-basic/events/index.js
// response - happy birthday Frizka ade