import express from "express";
 const router = express.Router()
 router.get("/", (req, res)=>{
    const authors = [
        {
            id: "1",
            name: "samuele",
            surname:"cala",
            email:"ciao@gmail.it",
        },
        {
            id: "2",
            name: "giacomo",
            surname:"cala",
            email:"ciao@gmail.it",
        }
    ]
    res.send(authors)
})
router.get("/:id", (req, res)=>{
    const {id} = req.params
    res.send(`questo è l id dell autore ${id}`)
})
router.post("/", (req, res) =>{
    res.send("crea un nuovo autore")
})
router.put("/:id", (req, res)=>{
    const {id} = req.params
    res.send(`sto modificando l autore con l id ${id}`)
})
router.delete("/:id",(req, res)=>{
    const {id} = req.params
    res.send(`sto cancellando l autore con id ${id}`)
})
export default router
