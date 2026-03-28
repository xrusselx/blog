const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from public
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Russel Notes",
    posts: [{ title: "One Piece", date: "03/26/2026", link: "article" }],
  });
});

app.get("/article", (req, res) => {
  res.render("article");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
