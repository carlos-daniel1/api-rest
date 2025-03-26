import mongoose from "mongoose";
const { Schema } = mongoose;

const purchaseSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" }
})


const Purchase = mongoose.model("Purchase", purchaseSchema)

export default Purchase;