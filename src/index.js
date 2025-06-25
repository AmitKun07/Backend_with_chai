import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import connectDB from "./db/index.js"

dotenv.config({path:'../.env'})





connectDB()
.then(()=>{
  app.listn(process.env.PORT || 8000, ()=>{
    console.log(`App is listening on port ${process.env.PORT || 8000}`)
  console.log("DB connected successfully")
}) ;
})
.catch((error)=>{
  console.error("DB connection failed", error);
  process.exit(1)
})








/* const app=express()

( async()=>{
  try{
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("ERROR",(error)=>{
      console.err("ERR:",error);
      throw error
    })
    
  
    app.listen(process.env.PORT , ()=>{
      console.log(`App is listening on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.error("ERROR", error);
    throw error
  }
})() */

