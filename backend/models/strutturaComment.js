import {model, Schema} from 'mongoose'

const strutturaComment = new Schema(
    {
        content: {
            type: String,
            minLength: 2,
            maxLength: 100,
            required: true,
            trim: true,
        },
        post: {    //da vedere
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    },
    {collection: "comments",
        timestamps: true,
    }
)
export default model("Comment", strutturaComment)