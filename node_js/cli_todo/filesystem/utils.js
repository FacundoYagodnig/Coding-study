import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const todoLocation = path.win32.normalize(path.join(__dirname, "todo.json"));

const saveTodo = (todo) => {
  fs.writeFileSync(todoLocation, JSON.stringify(todo));
};

const getTodos = () => {
  JSON.parse(fs.readFileSync(todoLocation));
};

console.log(todoLocation);

export { saveTodo, getTodos };
