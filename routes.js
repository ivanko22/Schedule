const home = require("./controllers/home.js");

module.exports = (app) => {
    app.get("/", home.main);
    
}