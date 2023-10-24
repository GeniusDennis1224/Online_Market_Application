const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

/** =================== Establish the connection with MongoDB =================*/
const DB = process.env.DATABASE;

//Connect to the MongoDB Database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Successfully Connected to MongoDB!");
  });

/** ============= Start the Server ============= */
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Successfully Connected to the Server on Port 3000.....");
});
