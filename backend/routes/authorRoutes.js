import express from "express";                          
import uploadCloudinary from "../middleware/uploadCloudinary.js";
import * as authorController from "../controllers/authorController.js";

 const router = express.Router()
 /** GET /authors => ritorna la lista degli autori */
router.get("/", authorController.getAuthors);
    

/** GET /authors/123 => ritorna il singolo autore */
router.get("/:id", authorController.getAuthor)

/** POST /authors => crea un nuovo autore */
router.post("/", authorController.postAuthor)

/** PUT /authors/123 => modifica l'autore con l'id associato */
router.put("/:id", authorController.putAuthor)

/** DELETE /authors/123 => cancella l'autore con l'id associato */
router.delete("/:id", authorController.deleteAuthor)


/** GET /authors/:id/blogPosts/ => ricevi tutti i blog post di uno specifico autore dal corrispondente ID */
router.get("/:id/blogPosts/", authorController.GetBlogPostsAuthor)

/** PATCH /authors/:authorId/avatar, carica un'immagine per l'autore specificato e salva l'URL creata da Cloudinary nel database. */
  router.patch('/:authorid/avatar', uploadCloudinary.single("avatar"), authorController.PatchAuthorAvatar )
 
  
export default router
