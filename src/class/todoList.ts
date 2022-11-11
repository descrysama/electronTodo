import { Task } from "./Task";
import { ITodolist } from "../types/classInterface";

export class todoList implements ITodolist{
    
    tasks: Task[] = [];

    addTask(content: string): void {
        let newTodo = new Task(content);
        this.tasks.push(newTodo);
    }

    toggleTask(id: string): void {
        this.tasks.map(task => task.id == id ? task.toggle() : null)
    }

    removeById(id: string): void {
        this.tasks.filter(task => task.id != id)
    }

    clearDone(): void {
        this.tasks = this.tasks.filter(task => !task.done)
    }
}