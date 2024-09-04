import {model, Schema} from 'mongoose'

const strutturaUser = new Schema(
    {
        googleID:String,
        firstName: String,
        lastName:String,
        email: { 
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            
        },
        verifiedAt: Date,
        verificationCode: String,
    
    },

    {collection: "users",
        timestamps: true,
    }
)

const User = model("User", strutturaUser);
export default User
 