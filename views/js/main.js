
let dateArray = [];
dateArray.pop()

let drawMonthCards = () => {
    let container = document.getElementById("month-btns");

    while(container.children.length > 1){
        container.removeChild(container.lastChild);
    }

    for(let date of dateArray){
        let monthCard = template.cloneNode(true);
        monthCard.children[0].innerText = months[date.getMonth()];
        monthCard.children[1].innerText = date.getFullYear();
        container.appendChild(monthCard);
    }
}

let monthScroll = () => {
    
    let newArray = [];
    let newDate = new Date(dateArray[0].getFullYear(), dateArray[0].getMonth() -1, dateArray[0].getMonth());
    newArray.push(newDate);
    
    for(let i = 0; i < dateArray.length -1; i++){
        newArray.push(dateArray[i]);
    }

    dateArray = newArray;
    drawMonthCards();
}

let backButton = document.getElementById("backMonth");
backButton.onclick = monthScroll;


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
            
            //Set Location
            ScheduleCard.children[1].children[2].children[1].innerText = classItem.location;
            
            container.appendChild(ScheduleCard);
            
        }
    })
    .catch((err) => {
        console.log(err)
    });

let today = new Date()
let container = document.getElementById("month-btns");
let template = document.getElementById("monthCard").content.children[0];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for(let i = 5; i >= 0; i--){
    let newDate = new Date(today.getFullYear(), today.getMonth() - i, today.getDate());
    dateArray.push(newDate);
}
drawMonthCards();


