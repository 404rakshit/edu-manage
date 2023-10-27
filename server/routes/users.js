require("dotenv").config();
const express = require("express");
const router = express.Router();
const main = require("../index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const cloudinary = require("cloudinary").v2;

const client = new MongoClient(process.env.MONGO);

const coll = client.db("User").collection("Name");

client.connect((err) => {
  console.log("Connected to DB");
});

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.C_KEY,
  api_secret: process.env.C_SECRET,
});

//Get ALl Users
router.get("/", async (req, res) => {
  try {
    const users = await coll.find().toArray();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create New User
router.post("/register", main.verifyOtp, async (req, res) => {
  try {
    if (!req?.body?.name) throw { status: 404, message: "Name is required" };
    if (!req?.body?.email) throw { status: 404, message: "Email is required" };
    if (!req?.body?.roll)
      throw { status: 404, message: "Roll Number is required" };
    if ((await coll.countDocuments({ roll: req?.body?.roll })) == 1)
      throw { status: 403, message: "Roll Number Already Exists" };
    if (!req?.body?.branch)
      throw { status: 404, message: "Branch is required" };
    if (!req?.body?.sem) throw { status: 404, message: "Semester is required" };
    if (!req?.body?.password)
      throw { status: 404, message: "Password is required" };
    if ((await coll.countDocuments({ email: req?.body?.email })) == 1)
      throw { status: 403, message: "Email Already Exists Use Another Email" };

    let imgUrl = null; 
    if (!!req?.body?.image) {
      await cloudinary.uploader.upload(req.body.image,
        { public_id: req?.body?.roll, folder: "edu-manage" }, (error, result)=>{
          if(error) {
            // console.log(error);
            throw { status: 500, message: error.message }
          };
          imgUrl = result?.url
        }
      );
    }

    const user = await coll.insertOne({
      name: req.body.name,
      email: req.body.email,
      roll: req.body.roll,
      phone: req?.body?.phone,
      branch: req.body.branch,
      sem: req.body.sem,
      image: imgUrl,
      password: bcrypt.hashSync(req.body.password, 12),
    });
    user.message = "New User Created";
    ran[req.body.email] = null;
    res.send(user);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

//Get One User
router.get("/:id", getUser, (req, res) => {
  res.send(res.user);
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await coll.findOne({ roll: req.params.id });
    if (user == null) throw { status: 404, message: "Not Found" };
    res.user = user;
    next();
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

//Login
router.post("/login", async (req, res) => {
  try {
    if (!req?.body?.email) throw { status: 404, message: "Email is required" };
    if (!req?.body?.password)
      throw { status: 404, message: "Password is required" };
    const oldUser = await coll.findOne({ email: req.body.email });

    if (!!oldUser) {
      if (!bcrypt.compareSync(req.body.password, oldUser.password)) {
        throw { message: "Wrong Password !" };
      }
      const obj = {
        id: oldUser._id,
        name: oldUser.name,
        email: oldUser.email,
        roll: oldUser.roll,
        phone: oldUser.phone,
        branch: oldUser.branch,
        sem: oldUser.sem,

        // theme: oldUser.theme,
      };
      const token = jwt.sign(obj, "secretkey");
      res.status(201).json({
        id: oldUser._id,
        name: oldUser.name,
        email: oldUser.email,
        roll: oldUser.roll,
        phone: oldUser.phone,
        branch: oldUser.branch,
        sem: oldUser.sem,
        token,
      });
    } else {
      throw { status: 404, message: "Email doesn't exists" };
    }
  } catch (err) {
    res.status(err?.status || 400).json({ message: err.message });
  }
});

// Show
// router.post("/show", verifyToken, async (req, res) => {
//   try {
//     let user = await coll.findOne({ email: req.userEmail });
//     res.send(user);
//   } catch (err) {
//     res.send(err);
//   }
// });

function verifyToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
  if (bearerheader) {
    // console.log(bearerheader);
    const bearerToken = bearerheader.split(" ")[1];
    jwt.verify(bearerToken, "secretkey", (err, authData) => {
      // console.log(authData);
      if (err) {
        res.sendStatus(403);
      } else {
        req.userId = authData.id;
        req.userEmail = authData.email;
      }
    });
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
