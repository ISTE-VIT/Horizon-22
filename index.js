var express = require("express");
var app = express();
const coredata = require("./core");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { core: coredata });
});

app.get("/codeasymptote", (req, res) => {
  res.render("events", { core: coredata });
});

app.get("/mlbootcamp", (req, res) => {
  res.render("events", { core: coredata });
});

app.get("/webdev", (req, res) => {
  res.render("events", { core: coredata });
});

app.get("/electronix", (req, res) => {
  res.render("events", { core: coredata });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port 3000`);
});
