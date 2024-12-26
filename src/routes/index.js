
const homeRoutes = require("./homeRoutes");


const initWebRoutes = (app) => {

 
    app.use("/", homeRoutes);
};


module.exports = initWebRoutes;