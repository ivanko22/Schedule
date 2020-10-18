const Class = require("../models/class.js");

module.exports = {

    main: function( request, response ) {
        response.render("ejs/main.ejs")
    },

    price: function( request, response ) {
        response.render("ejs/price.ejs")
    },

    createNewClass: function(request, response){

        let classObject = {
            name: "First Class",
            date: new Date(),
            location: "Somewhere",
            classType: "Medical",
            attendees: [],
            teacher: "Lee"
        };

        let newClass = new Class(classObject);

        console.log(newClass);

        newClass.save()
            .then((response) => {
                console.log(response);
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}