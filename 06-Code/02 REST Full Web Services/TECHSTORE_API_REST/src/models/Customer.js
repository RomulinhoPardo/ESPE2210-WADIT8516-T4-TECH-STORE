import { Schema, model } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const CustomerSchema = new Schema(
  {
    name_client: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    Phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
CustomerSchema.plugin(uniqueValidator);
export default model("Customer", CustomerSchema);
