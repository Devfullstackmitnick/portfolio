const express=require("express")
const PORT = process.env.PORT || 10000;
const app=express()
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const path=require("path")
const ejs=require("ejs")
const route=require("./routes/route")
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
//pour utiliser la methode POST
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//definir que tous les fichiers statics sont dans le dossier public
app.use(express.static("public"))

//definir que pour les VUES on utilise EJS et que les pages EJS sont dans le dossier views
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))

//la route generale est definit
app.use("/", route)

app.listen(PORT, ()=>{
    console.log(`Serveur tourne sur le port ${PORT}`)
})

app.use((req, res)=>{
     res.status(404).send("Page non trouvee")
})