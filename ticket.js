const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

const categoryID = "868027147011375194";

var userName = message.author.username;
var userDiscriminator = message.author.discriminator;

var ticketBestaat = false;

message.guild.channels.cache.forEach(channel => {

      if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
          ticketBestaat = treu;

          message.reply("Je hebt al een ticket een gemaakt.");

          return;
      }
    
});

   if(ticketBestaat) return;

   var embed = new discord.MessageEmbed()
   .setTitle("hoi " + message.author.username)
   .setFooter("Support kanaal word aangemaakt");

   message.channel.send(embed);

   message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
       (createdChannel) => {
           createdChannel.setParent(categoryID).then(
               (settedParent) => {

              settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                  SEND_MESSAGES: false,
                  VIEW_CHANNEL: false
              });

              settedParent.updateOverwrite(message.author.id,{
                VIEW_CHANNEL: true,
                 CREATE_INSTENT_INVITE: false,
                 READ_MESSAGES: true,
                 SEND_MESSAGES: true,
                 ATTACH_FILES: true,
                 CONNECT: true,
                 ADD_REACTIONS: true
           });

            var embedParent = new discord.MessageEmbed()
            .setTitle(`Hoi ${message.author.username}`)
            .setDescription("Het support Team komt zo vlug mogenlijk naar je toe. \n Zet hier alvast je Bericht/ Vraag.");

                settedParent.send(embedParent);

               }
           ).catch(err =>{
               message.channel.send("Er is iets misgelopen");
           });
       }
   ).catch(err =>{
    message.channel.send("Er is iets misgelopen");
});



}

module.exports.help = {
    name:"ticket"
}