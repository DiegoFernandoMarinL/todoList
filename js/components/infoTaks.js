export const infoTasks = (data)=>{
    let plantilla = "";
    for (const value of Object.values(data)) {
        console.log(data)
        plantilla += /*html*/`
            <article class="article__task">
                <p>${value.task}</p>
                <div>
                    <img src="storage/img/cheque.png">
                    <img src="storage/img/bote-de-basura.png">
                </div>
            </article>
           `;
    }
    return plantilla;
}