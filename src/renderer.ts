import { Task } from './class/Task';
import { renderTasks } from './client/renderTasks';
import './index.css';

// Premier chargement de la page
const onLoad = async() => {
    renderTasks(await window.todoApi.getTodos());
}
onLoad()


const clearDoneTask = document.getElementById("clear-done")
clearDoneTask.addEventListener('click', () => {
    window.todoApi.clearDone()
    onLoad();
})




const addTask = document.getElementById("addTaskForm");
addTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputSubmit = (<HTMLInputElement>document.getElementById("task-input"));
    async function addTask() {
        if(!inputSubmit.value) {
            const error = document.createElement('p');
            error.textContent = "Attention 🚨 : Veuillez ecrire quelque chose..."
            error.id = "input-error"
            document.getElementById("addTaskForm").appendChild(error)
            setTimeout(() => {
                document.getElementById("input-error").remove()
            }, 2800);
        } else {
            await window.todoApi.addTask(inputSubmit.value)
            inputSubmit.value = ""
        }
    }
    addTask();
    onLoad();
})


