const home = require("./controllers/home.js");

module.exports = (app) => {

{
    app.get("/", home.main);    
}

{
    app.get("/price", home.price);    
}

}