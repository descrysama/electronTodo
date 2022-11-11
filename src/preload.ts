import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('todoApi', {
    getTodos: () => ipcRenderer.invoke('get-todos'),
    addTask: (label: string) => ipcRenderer.invoke('add-task', label),
    toggle: (id: string) => ipcRenderer.invoke('toggle-task', id),
    clearDone: () => ipcRenderer.invoke('clear-done')
})