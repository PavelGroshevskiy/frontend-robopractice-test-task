const express = require("express");
const cors = require("cors");
const port = 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
	res.send(require("./data.json"));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
