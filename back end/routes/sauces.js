const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sauceCtrl = require("../controllers/sauces");


router.post("/", auth, multer, sauceCtrl.createSauce);
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce);
router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", auth, multer, sauceCtrl.updateSauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);


module.exports = router;