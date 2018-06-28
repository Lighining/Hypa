const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let modEmbed = new Discord.RichEmbed()
.setTitle("Moderation Commands")
.setColor("#880000")
.addField("ban", "Ban's a member from your server.")
.addField("kick", "Kicks a member from your server.")
.addField("warn", "Warn's a member with said reason.")
.addField("mute", "Mute's a member.")
.addField("tempmute", "Temporarily mutes a user.")
message.channel.send(modEmbed)
}