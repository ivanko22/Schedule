
fetch("/class", {
    method: "get"
})
    .then(response => response.json())
    .then((response) => {
        let container = document.getElementById("classes");
        let template = document.getElementById("scheduleCard").content.children[0];

        for(let classItem of response){
            let ScheduleCard = template.cloneNode(true);
            ScheduleCard.children[1].children[0].children[1].innerText = classItem.name;
            container.appendChild(ScheduleCard);
        }
    })
    .catch((err) => {
        console.log(err)
    });
