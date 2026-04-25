import express from "express";
import slugify from "slugify";
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from public
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const posts = [
  {
    title: "One Piece",
    date: "3/26/2026",
    content: "Wealth, fame, power.",
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
  const post = posts.find((p) => p.id === req.params.id);
  console.log(post);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("post", { post });
});

app.get("/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  res.render("edit", { post });
});

app.post("/submit", (req, res) => {
  posts.push({
    title: req.body["postTitle"],
    date: new Intl.DateTimeFormat("en-US").format(new Date()),
    content: req.body["postContent"],
    id: slugify(req.body["postTitle"], { lower: true, strict: true }),
  });
  console.log(posts);
  res.render("index", {
    title: "Russel Notes",
    posts,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
