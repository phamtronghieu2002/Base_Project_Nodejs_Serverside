const express = require("express");
const cors = require('cors');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const env = require("./config/env");
const corsOptions = require("./config/cors");
const userValidation = require("./validations/userValidation");
const configViewEngine = require("./config/viewEngines");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");

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
app.use(cors(corsOptions))

// app.post("/", userValidation.userValidation, async (req, res) => {


//   return res.status(200).json({ message: "Hello Trong Hieu" });
// });

  
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
