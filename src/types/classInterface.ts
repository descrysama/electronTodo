import { Task } from "../class/Task";

export interface ITask {
    id: string;
    content: string;
    done: boolean;
    
    toggle: () => void 
}

export interface ITodolist {
    tasks: ITask[];
    
    addTask:(content: string) => void
    
    toggleTask:(id: string) => void
    
    removeById:(id: string) => void
    
    clearDone:() => void
}

export interface ItodoApi {
    getTodos: () => Task[];
    addTask: (label : string) => void
    toggle: (id: string) => void
    clearDone: () => void
}

export interface IHtmlCreator {
    tagname: string;
    content?: string;
    id?: string;
    classes?: string[];
    type?: string;
    done?: boolean;
}

declare global {
    interface Window {
        todoApi: ItodoApi
    }
}