const path = require("path");
const express = require("express");
const bodyParser = require("body-parser")
const notFound = require("./controllers/404")



const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


const app = express();

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }))
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use(notFound);

app.listen(3000);
