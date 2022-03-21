const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//const args = message.content.slice(prefix.length).split(/ +/);
 
if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

//if (!args[1]) return message.reply("Geen gebruiker opgegeven.");
if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

//if (!args[2]) return message.reply("Gelieve een redenen op te geven.");
if (!args[1]) return message.reply("Gelieve een redenen op te geven.");


//var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


//var reason = args.slice(2).join(" ");
var reason = args.slice(1).join(" ");

if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

var embedPrompt = new discord.MessageEmbed()
.setColor("RED")
.setTitle("Gelieve te reageren binnen 30 sec.")
.setDescription(`Wil je ${kickUser} kicken?`);

var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setThumbnail(kickUser.user.displayAvatarURL)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
    **Gekickt door:** ${message.author}
    **Redenen: ** ${reason}`);

    message.channel.send(embedPrompt).then(async msg => {

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji === "✅") {

            msg.delete();

            kickUser(reason).catch(err =>{
                if(err) return message.reply("er is iets foutgelopen");
            });

            message.channel.send(embed);

        } else if (emoji === "❌") {

            msg.delete();

        message.reply("Kick geanuleerd").then(m => m.delete(5000));


        }


    });

}

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}

module.exports.help = {
    name:"kick"
}