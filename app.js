const express = require("express"),
  morgan = require("morgan");
const app = express();
const cors = require("cors");
const customerRoute = require("./routes/customer");
require("dotenv").config();

const port = process.env.PORT || 8081;

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use("/customer", customerRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
