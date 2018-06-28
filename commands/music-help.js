const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 let musicEmbed = new Discord.RichEmbed()
.setTitle("Music Commands")
.setColor("#880000")
.addField("play", "Plays a song.")
.addField("skip", "Skip's a currently playing song.")
.addField("stop", "Stop's currently playing song.")
.addField("volume", "You can lower or raise the volume.")
.addField("queue", "Tell's you the current queue of songs")
.addField("pause", "Pause's currently playing song")
.addField("resume", "Resume's current song if it's paused.")
.setFooter("All credit for the music commands go to Techmonster20#4355, without him they wouldn't be here.")
message.channel.send(musicEmbed)
}

