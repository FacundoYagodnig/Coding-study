const fs = require("fs").promises;
const path = require("path");

const todoLocation = path.join(__dirname, "todo.json");

const saveTodo = (todo) => {
  fs.writeFileSync(todoLocation, JSON.stringify(todo));
};

const getTodos = () => {
  JSON.parse(fs.readFileSync(todoLocation));
};

module.exports = saveTodo;
module.exports = getTodos;
