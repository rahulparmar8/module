const readline = require("readline");
// const util = require("util");
const RL = readline.createInterface(process.stdin, process.stdout);

RL.question("what is your name?", (names) => {
  RL.setPrompt(`${names} what is your age?`);
  RL.prompt();
});
RL.on("line", function (age) {
  if (age < 18) {
    console.log(`${names} your age is ${age} you can not proceed `);
    RL.close();
  } else {
    console.log(`${names}your age is ${age} you can proceed `);
    RL.close();
  }
});
