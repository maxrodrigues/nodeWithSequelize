const db = require("../../../db");
const customers = require("../../models/customer");

const store = (req, res, next) => {
    try {
        let newCustomer = customers.create(req.body);

        res.status(201).send({
            message: newCustomer,
            data: req.body,
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = store;
