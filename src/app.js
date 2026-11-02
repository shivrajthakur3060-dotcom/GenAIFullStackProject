const express=require("express")




const app=express()
app.use(express.json())

/* Require all the routes here */
const authRouter=require("./routes/auth.routes")
/* Use all the Routes Here */
app.use("/api/auth",authRouter)


module.exports=app