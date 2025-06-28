import mongoose ,{Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"    

const userShema = new mongoose.Schema(
    {
        user:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        eamil:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required: true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required: true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[{
            type:Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
            required:[true, 'password is required']
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
)
export const User=mongoose.model("User", userShema)