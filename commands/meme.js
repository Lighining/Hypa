const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {

        let{body} = await superagent
      .get(`https://api-to.get-a.life/meme`);

    let me = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle("lmao!")
    .setImage(body.url);

    message.channel.send(me);
  }
