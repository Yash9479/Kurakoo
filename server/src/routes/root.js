const express = require("express");
const router = express.Router();
// example route
const example = require("./example.route");

// Authantication routes
const authRoutes = require("./auth.routes");


// Question Route
const questionRoutes = require("./questions.routes");

// Answer route
const answerRoutes = require("./answers.routes");

//Upload route
const uploadRoutes =require("./upload.routes");

//Spaces route
const spaceRoutes = require("./spaces.routes");

//Admin route
const adminRoutes = require("./admin.routes")


//User route
const userRoutes = require("./user.routes")

//Comment route
const commentRoutes = require("./comments.routes")


router.use("/example", example);
router.use("/", authRoutes);
router.use("/", questionRoutes);
router.use("/", answerRoutes);
router.use("/", uploadRoutes);
router.use("/", spaceRoutes);
router.use("/admin",adminRoutes);

router.use("/user",userRoutes);

router.use("/", commentRoutes)



module.exports = router;
