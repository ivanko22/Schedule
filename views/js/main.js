
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

            //Lecture
            ScheduleCard.children[1].children[0].children[1].innerText = classItem.name;
            
            //Set Time
            let dateTime = new Date(classItem.date);
            let time = dateTime.getHours();
            ScheduleCard.children[0].children[1].children[0].children[1].innerText = `${time}:00 - ${time+1}:00`;

            //Set students attenging
            ScheduleCard.children[0].children[2].children[0].innerText = `${classItem.attendees.length} student attending `;

            //Set date
            let dateString = dateTime.toDateString();
            let dateArray = dateString.split(/:| /);
            let displayDay = `${dateArray[0]}`;
            let displayDate = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
            
            ScheduleCard.children[1].children[1].children[1].innerText = displayDay;
            ScheduleCard.children[1].children[1].children[2].innerText = displayDate;
            
            // console.log("displayDate", displayDate);

            //Set Location
            ScheduleCard.children[1].children[2].children[1].innerText = classItem.location;
            
            container.appendChild(ScheduleCard);
            
        }
    })
    .catch((err) => {
        console.log(err)
    });

let today = new Date()
let dateArray = [today];

for(let i = 1; i < 11; i++){
    let newDate = new Date(today.getFullYear(), today.getMonth() - i, today.getDate());
    dateArray.push(newDate);
}

console.log("dateArray", dateArray);
console.log("dateArray[1]", dateArray[2].toString().split(/:| /));