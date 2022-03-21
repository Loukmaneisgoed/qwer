const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Testing", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }

    if (command === `${prefix}info`) {
        // Embed wat we gaan laten tonen.
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription("Hallo, Wij zijn een roleplay server. De game is in maak.")
            .setColor("#ff0303")
             .addFields(
                  {name: "maker's", value:"Tyvano, Jakko"},
                  {name: "mede maker's", value:"Burst"},
                  {name: "server naam", value:"Friesland The nederlands"},
                  {name: "server leden", value:"20"},
             )
            .addField("Bot naam", client.user.username);

 
        // Terug sturen van het bericht
        return message.channel.send(botEmbed);
    }
    
});
