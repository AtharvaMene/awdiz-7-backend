import { model, Schema } from "mongoose";

const productSchema = new Schema({
  product: String,
  productprice: Number,
});

const Proudct = model("Product", productSchema);

export default Proudct;
