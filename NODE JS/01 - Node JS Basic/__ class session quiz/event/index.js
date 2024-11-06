// TODO 1
const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}
   
// TODO 2
const myEmitter = ({name}) => {
    birthdayEventListener(name);
}

// TODO 3
myEventEmitter.on('birthday', myEmitter);

// TODO 4
myEventEmitter.emit('birthday', { name: 'Ojam' });