const express=require("express")
const route=express.Router()
const routeController=require("../controllers/controller")

route.get("/",routeController.indexController)  //traitement de la page index.ejs
route.get("/competences",routeController.competenceController)
route.get("/projets",routeController.projetController)
route.get("/contact",routeController.contactController)

route.post("/contact",routeController.formulaireController)

module.exports=route