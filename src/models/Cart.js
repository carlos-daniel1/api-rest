import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
})


const Cart = mongoose.model("Cart", cartSchema)

export default Cart;