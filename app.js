const express = require("express");
const sequelize = require("./db");

const app = express();
const port = 3000;

app.use(express.json());

// Routes
const customers = require("./src/routes/customers");
app.use("/customers", customers);

app.get("/", (req, res, next) => {
    res.status(200).send({
        hello: "Hello Word",
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
