import { model, Schema } from "mongoose";

const posts = new Schema(
  {
    // categoria del post,
    category: {
      type: String,
      required: true,
    },
    // titolo del post,
    title: {
      type: String,
      required: true,
    },
    // link dell'immagine,
    cover: {
      type: String,
      default: "https://picsum.photos/1000/300",
    },
    readTime: {
      // numero,
      value: Number,
      // unità di misura
      unit: String,
    },
    // id dell'autore del post,
    author: {
      type: String,
      // required: true,
    },
    // HTML dell'articolo
    content: {
      type: String,
      required: true,
    },
  },
  { collection: "posts" }
);
export default model("Post", posts);