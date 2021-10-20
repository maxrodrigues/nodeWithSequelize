const express = require("express");
const router = express.Router();

const index = require("../controllers/customer/IndexController");
const show = require("../controllers/customer/ShowController");
const store = require("../controllers/customer/StoreController");
const update = require("../controllers/customer/UpdateController");
const del = require("../controllers/customer/DeleteController");

// List all
router.get("/", index);

// List one
router.get("/:id", show);

// Store Customer
router.post("/", store);

// Update Customer
router.put("/:id", update);

// Delete Customer
router.delete("/:id", del);

module.exports = router;
