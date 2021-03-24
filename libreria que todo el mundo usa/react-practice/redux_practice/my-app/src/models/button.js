import { v4 as uuid } from "uuid";

export class button {
  constructor(label) {
    this.id = uuid();
    this.label = label;
    this.complete = false;
  }
}
