const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var halloEmbed = new discord.MessageEmbed()
        .setDescription(`Hallo ${message.author.username}!`)
        .setColor("#FF0000");
      message.channel.send(halloEmbed);

}

module.exports.help = {
    name:"hallo"
}