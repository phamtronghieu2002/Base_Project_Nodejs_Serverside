const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const homeRoutes = require("./homeRoutes");
const newsRoutes = require("./newsRoutes");
const contactRoutes = require("./contactRoutes");


const initWebRoutes = (app) => {

    app.use("/", homeRoutes);
    app.use("/admin", adminRoutes);
    app.use("/news", newsRoutes);
    app.use("/contact", contactRoutes);
    app.use("/product", productRoutes);
};


module.exports = initWebRoutes;