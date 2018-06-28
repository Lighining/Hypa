const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let inviteEmbed = new Discord.RichEmbed()
.setTitle("Click me for invite")
.setURL("https://discordapp.com/oauth2/authorize?client_id=461405452744261633&permissions=8&scope=bot")
.setFooter("Click the message above to invite the bot")
message.channel.send(inviteEmbed)
}