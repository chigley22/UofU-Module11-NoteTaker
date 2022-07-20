const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require("./routes/apiRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
