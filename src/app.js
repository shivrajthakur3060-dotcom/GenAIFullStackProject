const express=require("express")




const app=express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Server is Ready")
})

app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", data: req.body });
});


app.get("/api/data", async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});



module.exports=app