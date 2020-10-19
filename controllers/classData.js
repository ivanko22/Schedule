const { response } = require("express");
const Class = require("../models/class.js");

module.exports = {

    getClasses: function(req, res){
        Class.find()
            .then((classes)=>{
                return res.json(classes);

            })
            .catch((err)=>{
                console.log(err);
            });
            
    }
   
};