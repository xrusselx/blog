import express from "express";
import slugify from "slugify";
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from public
app.use(express.static("public"));

const posts = [
  {
    title: "One Piece",
    date: "03/26/2026",
    id: slugify("One Piece", { lower: true, strict: true }),
  },
];

// Home route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Russel Notes",
    posts,
  });
});

app.get("/:id", (req, res) => {
  res.render("article");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
