import express from 'express';
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

app.get("/" , (req , res)=>{
    res.send("Hello DecodeLabs")
});

app.post("/users" , (req , res)=>{
    const {name , email , password} = req.body

    if(!name || !email || !password){
       return res.status(400).json({
        message : "All Fileds are required"
       })
    }


    return res.status(201).json({
        message : "user created successfully" ,
        user : {
          name ,
          email,
          password
        }

    })
})

app.listen(PORT , ()=>{
    console.log(`Server is listening on port : ${PORT}`)
});