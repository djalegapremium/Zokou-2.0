const {zokou}=require("../framework/zokou")







zokou({nomCom:"redemarrer",categorie:"Proprio",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!dev ||!superUser)
  {
    return repondre("Cette commande est réservée au propriétaire du bot");
  }

  const {exec}=require("child_process")

    repondre("* Redémarrage du bot en cour ...*");

  exec("pm2 restart all");
  

  



})
