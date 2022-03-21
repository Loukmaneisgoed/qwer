const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const categoryID = "868027147011375194";

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if(message.channel.parentID ==  categoryID) {
        message.channel.delete();

        var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket, " + message.channel.name)
        .setDescription("Het ticket is gemarkeerd als **compleet**.")
        .setFooter("Ticket gesloten");


        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔐ticket-logs");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve Dit command te doen bij een ticket.")

    }

 

}

module.exports.help = {
    name:"close"
}