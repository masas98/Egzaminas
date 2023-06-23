const mongoose = require("mongoose");
const cors = require("cors");
const app = require("./app");

const mongoUri =
  "mongodb+srv://vaidmas123:slaptazodis@egzaminas.7pdlzvu.mongodb.net/";

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your actual frontend URL
  })
);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port} and listening for requests`);
});
