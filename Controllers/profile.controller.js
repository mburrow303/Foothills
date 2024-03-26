const router = require("express").Router();
const Profile = require("../Models/profile.model");

const validateSession = require("../Middleware/validateSession");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function errorResponse(res, err) {
  res.status(500).json({
    ERROR: err.message,
  });
}

//* Create a New Profile
router.post("/signup", async (req, res) => {
  try {
    const profile = new Profile({
      clientName: req.body.clientName,
      companyAddress: req.body.companyAddress,
      email: req.body.email,
      contact: req.body.contact,
      username: req.body.username,
      password: req.body.password,
    });
    const newProfile = await profile.save();
    const token = jwt.sign({ username: newProfile.username }, process.env.JWT, {
      expiresIn: "1 day",
    });

    res.status(201).json({
      profile: newProfile,
      message: "Success! Profile Created!",
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

//* Client Login to Profile



//* Get All Profiles



//* Get a profile by User Id



//* Update a Profile by UserId



//* Delete a Profile by UserId





module.exports = router;