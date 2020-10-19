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
            name: "Third Class",
            date: new Date(),
            location: "There",
            classType: "Medical",
            attendees: [],
            teacher: "Frank"
        };

        let newClass = new Class(classObject);

        console.log(newClass);

        newClass.save()
            .then((response) => {
                console.log(response);
                res.redirect("/");
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}