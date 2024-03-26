const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },

  companyAddress: {
    type: String,
    required: true,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },

  contact: {
    required: true,
    type: String,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

ProfileSchema.pre('validate', function (next) {
  // Check if the document is new (creation) or not (update)
  if (!this.isNew) {
    this.clientName = this.clientName || undefined;
    this.companyAddress = this.companyAddress || undefined;
    this.email = this.email || undefined;
    this.contact = this.contact || undefined;
    this.username = this.username || undefined;
    this.password = this.password || undefined;
  }

  next();
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;