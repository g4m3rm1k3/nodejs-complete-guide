const path = require("path");
const express = require("express");
// const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

app.set("view engine", "ejs");
// app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("views", "views");

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.render("404", { title: "404", notFound: true });
});

app.listen(3000);
