module.exports = (req, res, next) => {
  res.render("404", { title: "404", notFound: true, path:'' });
}
