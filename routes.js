const home = require("./controllers/home.js");
const classData = require("./controllers/classData.js");

module.exports = (app) => {
    app.get("/", home.main);    
    app.get("/price", home.price); 
    app.get("/createnewclass", home.createNewClass);   

    app.get("/class", classData.getClasses);
}