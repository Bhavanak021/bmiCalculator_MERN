const express = require("express");
const router = express.Router();
const { addUser, getAllQuery } = require("../controller/user");


router.post("/add", addUser);
router.get("/get", getAllQuery);

module.exports = router;