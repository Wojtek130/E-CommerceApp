const app = require("./app");
const path = require("path");
const shopRouter = require('./routes/shop.route');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello everybody :)" });
// });
app.use('', shopRouter);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "greengrocers", "/public/index.html"));
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => { console.log(`Server listening on ${PORT}`); });
  } catch (e) {
    console.log(e);
  }
};

start();