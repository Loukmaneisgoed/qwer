const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   try{

       var text = "**Eindhoven Bot** \n\n **_Commands_** \n ,hallo - Geeft een hallo terug. \n ,info - Geeft info over de server. \n ,serverinfo - geeft je informatie over de server ( zoals waneer je bent gejoint) \n ,help - je krijgt alle commands in je privé berichten \n ,ticket - maakt een ticket aan. \n\n **staff commands** \n ,close - je close een ticket \n ,clear - Haalt berichten weg. \n ,ban - bant iemand ( voor management+) \n ,kick - kickt iemand (management+) \n\n **CC commands** \n ,staffmute - je mute een stafflid";

       message.author.send(text);

       message.reply("Alle commands komen in u privé bericht te  staan.")

   }catch(error){
       message.reply("er is iets fout gelopen");
   }

}

module.exports.help = {
    name:"help"
}