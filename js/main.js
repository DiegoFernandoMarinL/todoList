import { getTask } from "./module/task.js";
import { addTask } from "./module/task.js";

let info__allTasks = document.querySelector(".info__tasks");
let input__search = document.querySelector(".input__search");

let tasks = async e=> {
    let task = e.target.value;
    let data = await addTask({task: task, status: "On hold"});
    console.log(data);
    info__allTasks.innerHTML = await getTask();
}

input__search.addEventListener("change", tasks);
info__allTasks.innerHTML = await getTask();