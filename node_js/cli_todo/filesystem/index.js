#!/usr/bin/env node
const { program } = require("commander");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

const { todoPrompts } = require("./prompts");
const saveTodo = require("./utils");
const getTodos = require("./utils");

const log = console.log;

const { prompt } = inquirer;

program
  .version("1.0.0")
  .description(chalk.cyanBright(figlet.textSync("TODO LIST CLI")));

program
  .command("todo")
  .alias("td")
  .description("Agregar nueva tarea/Add new todo")
  .action(() => {
    prompt(todoPrompts).then(({ todo, quitarTodo }) => {
      const key = todo + quitarTodo;
      let todolist = getTodos();
      todolist[key] = { todo, quitarTodo };
      saveTodo(todoList);
      log(chalk.blueBright("Todo creado con exito"));
    });
  });

program
  .command("todoList")
  .alias("tl")
  .description(
    chalk.cyanBright(figlet.textSync("YOUR DAILY TASKS/TUS TAREAS DE HOY"))
  )
  .action(() => {
    let todoList = getTodos();
    prompt([
      {
        type: "checkbox",
        name: "selected",
        message: "Choose 1 todo/Elegi una tarea",
        choices: Object.keys(todoList),
      },
    ]).then(({ selected }) => {
      const todo = todoList[selected];
      log(`
             Tasks for today:
                 Name: ${todoList.name}`);
    });
  });

program.parse(process.argv);
