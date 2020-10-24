const Class = require("../models/class.js");

module.exports = {

    main: function( request, response ) {
        response.render("ejs/main.ejs")
    },

    price: function( request, response ) {
        response.render("ejs/price.ejs")
    },

    createNewClass: function(req, res){

        let classObject = {
            name: "Class in Dnipro",
            date: new Date(),
            location: "Dnipro",
            classType: "Running",
            attendees: ["Ivan", "Alex", "Ars"],
            teacher: "None"
        };

        let newClass = new Class(classObject);

        // console.log(newClass);

        newClass.save()
            .then((response) => {
                // console.log(response);
                res.redirect("/");
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}