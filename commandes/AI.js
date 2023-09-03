const { zokou } = require('../framework/zokou');
const tr =require("translate-google-api")
const deepai=require("deepai")
/*const { openai } = require('openai');

zokou({ nomCom: "gpt", categorie: "AI" }, async (dest, zk, commandeOptions) => {
  const { arg, repondre } = commandeOptions;

  if (!arg.join(" ")) {
    
    return repondre("Veuillez fournir un message !");
  }
  
  await doReact("✅");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function generateResponse(prompt, retries = 2) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      return completion.data.choices[0].message.content.trim();
    } catch (error) {
      if (
        error.response &&
        error.response.status === 429 &&
        retries > 0
      ) {
        const retryAfter =
          error.response.headers["retry-after"] * 1000 || 5000;
        repondre(
          `Limite de taux dépassée. Réessayez dans ${
            retryAfter / 1000
          } secondes...`
        );
        await sleep(retryAfter);
        return generateResponse(prompt, retries - 1);
      } else {
        console.error(error);
        await doReact("❌");
        return "Une erreur s'est produite lors de la génération de la réponse - limite d'utilisation de l'API dépassée ou clé d'API incorrecte.";
      }
    }
  }

  const prompt = arg.join(" ");
  const response = await generateResponse(prompt);
  
  repondre(` ${response}`);
}); */

async function fr(text){

 /* tr(text,{to:"fr"}).then(
    rep=>{return rep[0];}
  ).catch(e=>{console.log("oups une erreur : ",e)})*/
  var traduc = await tr(text,{to:"fr"});
  return traduc[0];
}

async function ia(requete){


  
deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");

  //deepai.callStandardApi("text-generator",{text:requete}).then(reponse=>{return  reponse.output;}).catch(e=>{console.log("🥵🥵🥵🥵")})
var rep =await deepai.callStandardApi("text-generator",{text:requete});
  return rep.output;
}

zokou({nomCom:"z",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

const {repondre,ms,arg}=commandeOptions;

  if(!arg.join(" "))
  {return repondre("Veuillez poser votre question .")}
  var quest = arg[0];
try{
  const rep=await ia(quest);
  const trad=await fr(rep);
 //var quest=arg.join(" ");
  console.log("ourt "+trad);
  repondre(trad);
}catch(e){var err_mot=fr(e);repondre("oupsaa une erreur : "+e)}
  

})
