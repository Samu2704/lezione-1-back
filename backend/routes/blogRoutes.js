import express from "express";
import strutturaBlog from "../models/strutturaBlog.js";

const router = express.Router()
 router.get("/", async (req, res)=>{
    try {
        const totalResults = await strutturaBlog.countDocuments();
        const PAGE = req.query.page || 1;
        const PERPAGE = req.query.perPage || totalResults;
        const totalPages = Math.ceil(totalResults / PERPAGE);
        /** GET /blogPosts?title=whatever => filtra i blog post e ricevi l'unico che corrisponda alla condizione di ricerca (es: titolo contiene "whatever") */
        const TITLE = req.query.title;
        // if (TITLE) {
        //   const BlogPostsQueryTitle = await strutturaBlog.findOne({
        //     title: { $regex: TITLE, $options: "i" },
        //   });
        //   res.send(BlogPostsQueryTitle);
        // } else {
        const AllBlogPosts = await strutturaBlog.find(
          TITLE ? { title: { $regex: TITLE, $options: "i" } } : {}
        )
          // .sort({ name: 1 })
          .skip((PAGE - 1) * PERPAGE)
          .limit(PERPAGE);
        res.send({
          data: AllBlogPosts,
          totalResults,
          totalPages,
          page: PAGE,
        });
        
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
})


router.get("/:id", async (req, res)=>{
    try {
        const SingleBlogPost = await strutturaBlog.findById(req.params.id);
        !SingleBlogPost
          ? res.status(404).send({ code: 404, message: "Post not found" })
          : res.send(SingleBlogPost);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
})


router.post("/", async (req, res) =>{
  try {
    !req.body.category &&
      res.status(400).send({ message: "Category is required" });
    !req.body.title && res.status(400).send({ message: "Title is required" });
    !req.body.content &&
      res.status(400).send({ message: "Content is required" });
    const NewBlogPost = new strutturaBlog(req.body);
    const CreatedBlogPost = await NewBlogPost.save();
    res.status(201).send(CreatedBlogPost);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
})


router.put("/:id", async (req, res)=>{
  try {
    const EditBlogPost = await strutturaBlog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    await EditBlogPost.save();
    res.send(EditBlogPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})


router.delete("/:id", async (req, res)=>{
  try {
    await strutturaBlog.findByIdAndDelete(req.params.id);
    res.send({ message: "BlogPost deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})
export default router
