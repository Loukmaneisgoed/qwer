const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Informatie')
    .setDescription("Hallo, Wij zijn een roleplay server. De game is in maak.")
    .setColor("#ff0303")
     .addFields(
          {name: "maker's", value:"Tyvano, Jakko"},
          {name: "mede maker's", value:"Burst"},
          {name: "server naam", value:"Friesland The nederlands"},
          {name: "server leden", value:"21"},
          {name: "Game status", value:"Dicht"},
     )
    .addField("Bot naam", client.user.username);


// Terug sturen van het bericht
return message.channel.send(botEmbed);
}

module.exports.help = {
    name:"info"
}