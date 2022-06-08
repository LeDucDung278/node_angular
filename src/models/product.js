import mongoose, {Schema, Types} from "mongoose";
const ObjectId = Types.ObjectId

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        minLength: 5,
    },
    status: {
        type: Number,
        required: true
    },
    // category: {
    //     type: ObjectId,
    //     ref: "category"
    // }

}, {timestamps: true})

export default mongoose.model("Product",productSchema)