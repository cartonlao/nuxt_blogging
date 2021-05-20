// require is decorated with .. vscode msg about it may be converted to ES6 module,
// but not allowed with node
// just leave it as is, and it will work.

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

const port = 3030;

// endpoint /
app.get("/", (req, res) => {
  res.send({ msg: "Hello World 2!" });
  console.log("ding!");
});

// endpoint /status
app.get("/status", (req, res) => {
  res.send({ msg: "Status All Normal 2." });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
