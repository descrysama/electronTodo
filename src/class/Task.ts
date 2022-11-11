import { ITask } from "../types/classInterface";

export class Task implements ITask{
    id: string;
    content: string;
    done: boolean;
    
    constructor(content: string) {
        this.id = Math.floor(Math.random() * 1000).toString();
        this.content = content;
        this.done = false;
    }

    toggle(): void {
        this.done = !this.done
    }

     
}