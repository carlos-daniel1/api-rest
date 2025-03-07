import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence";

const { Schema } = mongoose;

const incrementID = autoIncrement(mongoose);

const productSchema = new Schema({
    productID: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discounted: {
        type: Number,
        required: false
    },
})

productSchema.plugin(incrementID, { inc_field: "productID" });

const Product = mongoose.model("Product", productSchema)

export default Product;