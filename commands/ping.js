const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.tag}** | :ping_pong: Ping : ${client.ping}ms`)
    .setColor("#f44242")
message.channel.send(embed)
    .catch(console.error);
}