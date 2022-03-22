const express = require("express");
const router = express.Router();
const CropRoute=require("./crops.route")
const authRoute=require("./auth.route")
const modelRoute=require("./model.route")

// router.get("/", (req, res)=>{
//     res.send("Faisal");
// })
router.use("/crops", CropRoute);
router.use("/auth", authRoute);
// router.use("/model", modelRoute);



module.exports = router;