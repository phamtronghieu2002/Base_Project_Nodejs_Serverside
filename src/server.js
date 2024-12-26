const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path");
const env = require("./config/env");
const configViewEngine = require("./config/viewEngines");
const initWebRoutes = require("./routes");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
import obj from './db/db';
const Router = express.Router();
import userRoute from './routes/homeRoutes';

//init app
const app = express();

//define host,port and build mode
const hostname = env.LOCAL_APP_HOST;
const port = env.LOCAL_APP_PORT;
const build_mode = env.BUILD_MODE;

//config view engine for serverside rendering

configViewEngine(app);

//config static file ex:css,js,images in public folder
app.use(express.static(path.join(__dirname, "public")));

//config body parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configs cors




//configs routes
initWebRoutes(app);


Router.get('/lan1', (req, res) => {
  const x = obj;
  console.log(x);

  return res.status(200).json({ message: 'Hello Trong Hieu' });
});


app.use(Router)
app.use(userRoute);



//config error handling middleware
app.use(errorHandlingMiddleware);
if (build_mode === "dev") {
  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Trong Hieu Dev, I am running at ${hostname}:${port}/`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Hello Trong Hieu Prod, I am running at ${hostname}:${port}/`);
  });
}
