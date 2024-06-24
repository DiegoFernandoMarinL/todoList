import { infoTasks } from "../components/infoTaks.js";

let varUrl = "https://6674179975872d0e0a950e53.mockapi.io/todoList";

export const getTask = async()=>{
    let res = await fetch(`${varUrl}`);
    let data = await res.json();
    localStorage.setItem("allTask",JSON.stringify({data}));
    let user = await infoTasks(data);
    return user;
}
export const addTask = async(task)=>{
    let config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task)
    }
    let res = await fetch(varUrl, config);
    let data = await res.json();
    return data;
}
