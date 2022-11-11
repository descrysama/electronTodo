import { Task } from "../class/Task";
import { HtmlCreator } from "../class/HtmlCreator";
import { IHtmlCreator } from "../types/classInterface";

export const renderTasks = (tasks: Task[]) => {
    const body = document.getElementById('main');
    body.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('tasks-container');
    tasks.reverse()
    for (const task of tasks) {
        let object: IHtmlCreator[] = [
            {
                tagname: 'p',
                content: task.content,
            },
            {
                tagname: 'input',
                type: 'checkbox',
                id: task.id,
                done: task.done
            }
        ]
        let parentDiv = {
            tagname: 'div',
            id: task.id,
            classes: ['task-container']
        }
        div.appendChild(HtmlCreator.render(object, parentDiv))
    }
    body.appendChild(div)
}