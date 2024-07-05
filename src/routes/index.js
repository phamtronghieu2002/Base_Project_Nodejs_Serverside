const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const initWebRoutes = (app) => {
      
 



    app.use("/admin", adminRoutes);
    app.use("/product", productRoutes);
};


module.exports = initWebRoutes;