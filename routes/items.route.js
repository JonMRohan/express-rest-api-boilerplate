const express = require("express");
const { itemsController } = require("../controllers");

const router = express.Router();

router.post("/items", itemsController.postItem);

module.exports = router;
