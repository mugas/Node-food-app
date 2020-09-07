var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var recipes = [
  {
    name: "First Recipe",
    image:
      "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380a2b91ee844c3d6ee349952f672eaf&auto=format&fit=crop&w=890&q=80"
  },
  {
    name: "Second Recipe",
    image:
      "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=173652e77ca58a61c86233ca20d89d6a&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Third Recipe",
    image:
      "https://images.unsplash.com/photo-1505252929202-c4f39cda4d49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b50befed71b9343dcc112253e7aeb5ee&auto=format&fit=crop&w=334&q=80"
  }
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/recipes", function(req, res) {
  //res.render("recipes", {recipes:recipes}); // The first "recipes" we can call it anything, the second is the data

  res.render("recipes", { recipes: recipes }); // The first "recipes" we can call it anything, the second is the data
});

app.post("/recipes", function(req, res) {
  //get data from the form and add to recipes array
  var name = req.body.name;
  var image = req.body.image;
  var newRecipe = { name: name, image: image };
  recipes.push(newRecipe);
  //redirect back to recipes page
  res.redirect("/recipes");
});

app.get("/recipes/new", function(req, res) {
  res.render("new.ejs");
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
