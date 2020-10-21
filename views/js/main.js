
fetch("/class", {
    method: "get"
})
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        let container = document.getElementById("classes");
        let template = document.getElementById("scheduleCard").content.children[0];

        for(let classItem of response){
            let timeSpan = document.getElementById("timeSpan");
            let ScheduleCard = template.cloneNode(true);

            //Set Name
            ScheduleCard.children[1].children[0].children[1].innerText = classItem.name;
            
            //Set Time
            let dateTime = new Date(classItem.date);
            let time = dateTime.getHours();
            ScheduleCard.children[0].children[1].children[0].children[1].innerText = `${time}:00 - ${time+1}:00`;

            //Set students attenging

            ScheduleCard.children[0].children[2].children[0].innerText = `${classItem.attendees.length} student attending `;

            container.appendChild(ScheduleCard);
            

        }
    })
    .catch((err) => {
        console.log(err)
    });
