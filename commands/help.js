const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let helpEmbed = new Discord.RichEmbed()
.setTitle("Help Menu's.")
.setColor("#880000")
.addField("fun-help", "Show's fun commands.")
.addField("mod-help", "Show's moderation commands.")
.addField("info-help", "Show's informational/helpful commands.")
.addField("music-help", "Show's you the music commands.")
message.channel.send(helpEmbed)
}
