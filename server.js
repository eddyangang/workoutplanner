const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
require("./seeders/seed")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/custommethods", { useNewUrlParser: true });
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);



app.listen(PORT, () => {
    console.log("App running on port http://localhost:" + PORT);
});