const app = require("./app");
const path = require("path");
const shopRouter = require("./routes/shop.route");
const adminRouter = require("./routes/admin.route")
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3001;

app.use("", shopRouter);
app.use("/admin", adminRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
