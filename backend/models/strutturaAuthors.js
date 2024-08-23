import { model, Schema } from "mongoose"

const authorsSchema = new Schema(
{
    name: {
        type: String,
        required:true,
    },
    surname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    birthDate: {
        type: Date,
        required:true,
    },
    avatar: {
     type: String,
     required:true,
    },
},
{collection : "authors"}
)

export default model ("Author", authorsSchema)
