const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const homeRoutes = require("./homeRoutes");
const initWebRoutes = (app) => {
      
 



    app.use("/admin", adminRoutes);
    app.use("/product", productRoutes);
    app.use("/", homeRoutes);
};


module.exports = initWebRoutes;