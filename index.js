const app = require("./app");
const path = require("path");

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello everybody :)" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "greengrocers/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
