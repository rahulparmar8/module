const EventEmitter = require ('events');
const event = new EventEmitter()

event.on("my name", () => {
  console.log("your name is rahul");
});

event.emit("my name");

