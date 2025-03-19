import mongoose from "mongoose";

const { Schema } = mongoose;

import autoIncrement from "mongoose-sequence";
const incrementID = autoIncrement(mongoose);

const userSchema = new Schema({
    userID: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 11
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    purchase: [{ type: mongoose.Schema.Types.ObjectId, ref: "Purchase" }]
});

userSchema.plugin(incrementID, { inc_field: "userID" });

const User = mongoose.model("User", userSchema);

export default User;
