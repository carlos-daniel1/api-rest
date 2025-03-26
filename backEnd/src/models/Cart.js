import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
})


const Cart = mongoose.model("Cart", cartSchema)

export default Cart;