const express=require('express')
const app=express();
const axios=require('axios')
const path=require('path')
const fs=require('fs')
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'Nasa.html'))
})

app.get('/NasaWorld',async(req,res)=>{
    const date=req.query.date;
    try{
        const url=`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PTEhhV19YJO5oBIt7SEHlCN5DFWuwSNbRzI3zRHm`
        const responce= await axios(url)
        const nas=responce.data
        res.json(nas);
        console.log(nas)
        
    

    }catch(err){
        res.send("Chod de bhai coding")


    }
})
app.listen(3001,()=>{
    console.log("Hi I am  Ayush SIngh lets Start Nasa")
})



