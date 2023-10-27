const express = require("express");
const app = express();
const cors = require("cors");
const mail = require("./mail");
ran = {}
exports.ran = this.ran;

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.post("/", (req, res) => {
  console.log(req.body.url);
  res.status(419).json("Hello World");
});

app.post("/:id", (req, res) => {
  let email = req.params.id
  ran[email] = Math.floor(Math.random() * 8999 + 1000);
  mail
    .sendMail(ran[email], email)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

exports.verifyOtp = function (req, res, next) {
  try {
    if ( req.body.otp == null) throw { status: 404, msg: "⛔ Missing OTP" }
    if (req.body.otp != ran[req.body.email]) throw { status: 403, msg: "⛔ Wrong OTP" };
    next();
  } catch (err) {
    res.status(err.status || 500).json(err.msg || "⛔ Internal Server Error");
  }
};

const userRoute = require("./routes/users");
app.use("/user", userRoute);

app.listen(process.env.PORT || 3001, console.log("Server is Live Now"));
