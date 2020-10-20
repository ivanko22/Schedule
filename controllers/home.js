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
            name: "Some unique class",
            date: new Date(),
            location: "Here",
            classType: "Medical",
            attendees: [],
            teacher: "Johnny"
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