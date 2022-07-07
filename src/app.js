const express=require("express");
const app=express();
const hbs=require('hbs');
const path=require("path");
const port=process.env.PORT || 3000;

const publicPath=path.join(__dirname,'../public')
const templatePath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',templatePath)

// To register partials
hbs.registerPartials(partialPath)

// If you want to add any static css and js files from public folder 
app.use(express.static(publicPath))

// Routing
app.get("/",(req,res)=>{
    res.render('index'); 
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("error404");
})

app.listen(port,()=>{
    console.log("Listening to port 3000")
})