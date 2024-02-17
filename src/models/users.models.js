const { SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },

    apellidos: { type: String, required: true, trim: true },

    misAnimales: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "animal"}],

    image: { type: String, required: true, trim: true },

    mail: { type: String, required: true, trim: true },

    password: { type: String, required: true, trim: true },

    role: {
      type: String,
      default: "user",
      enum: ["admin", "user", "moderator"],
    },
  },
  { timeStamps: true }
);

userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
