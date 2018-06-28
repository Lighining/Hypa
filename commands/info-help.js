const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let infoEmbed = new Discord.RichEmbed()
.setTitle("Informational/Helpful commands")
.setColor("#880000")
.addField("weather", "Show's you the weather of chosen place")
.addField("sinfo", "Tell's you information about the server your in.")
.addField("ping", "Show's the bot's ping.")
.addField("membercount", "Show's the member count of current server.")
.addField("uinfo", "Show's information of mentioned user or if not mentioned it will show your information")
.addField("poll", "Sets up a poll with provided question")
.addField("emojilist", "List's all custom server emoji's!")
.addField("invite", "Give's you the invite for the bot")
message.channel.send(infoEmbed)
}