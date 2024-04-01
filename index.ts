#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let loop = true;

while (loop) {
  let puttask = await inquirer.prompt([
    {
      name: 'todo',
      type: 'input',
      message: "What you want to add in your Todos: "
    },
    {
      name: 'addmore',
      type: 'confirm',
      message: "Do you want to add more task in Todos",
      default: "false"
    }
  ]
);

  todos.push(puttask.todo);
  loop = puttask.addmore
  console.log(todos)
}
