const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let funEmbed = new Discord.RichEmbed()
.setTitle("Here are my fun commands.")
.setColor("#880000")
.addField("8ball", "Give's you a random prediction.")
.addField("rps", "Rock, Paper Scissors.")
.addField("give", "You can be a nice person and give some stuff!")
.addField("rolldice", "Roll's a dice!")
.addField("roast", "Roast some people.")
.addField("meme", "Show's you a funny meme.")
.addField("weather", "Show's you the weather of any chosen place.")
.addField("punch", "Punch someone right in the face!")
.addField("say", "Echo's the message after the command")
.addField("esay", "Like the say command only in an embed!")
.addField("reverse", "Reverse's some text!")
message.channel.send(funEmbed)
}
