import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectDB = async ()=>{
    try{
        const connectionInstance=  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGO DB coneection ERROR :",error)
        process.exit(1)


    }
}
export default connectDB;



// read more about process.exit(1)
// console.log karwa kar dekho connectionInstance