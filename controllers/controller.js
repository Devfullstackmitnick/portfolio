const express=require("express")
const mongoose=require("mongoose")
const Message=require("../models/model")

const indexController=(req,res)=>{                        //traitement de la page index.ejs
      res.render("index", {title:"Accueil - Portfolio"})
}
const competenceController=(req,res)=>{
     res.render("pages/competences",{title:"Competences -Portfolio"}) //page competence
}
const projetController=(req,res)=>{
    res.render("pages/projets",{title:"Projets -Portfolio"})    //page projects
}
const contactController=(req,res)=>{
    res.render("pages/contact",{title:"Contact -portfolio"}) //page de contact
}

const formulaireController= async (req,res)=>{
      try{
           const {nom,email,telephone,message}= req.body
           await Message.create({nom,email,telephone,message})
           res.render("pages/contact",{succes:true, title:"Contact -portfolio"})
      }
      catch(error){
                console.error("Erreur lors de l'enregistrement du message :", error);
    res.status(500).render("pages/contact", {
      succes: false,
      title: "Contact -portfolio",
      erreur: "Une erreur est survenue."    
    });
  
 }
       
}

module.exports={
    indexController,
    competenceController,
    projetController,
    contactController,
    formulaireController,
}

//modele MVC UTILISER ICI