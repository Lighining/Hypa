const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0]) {
      const errEmbed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setAuthor('ERROR')
      .setTitle(':exclamation: Usage: **&esay <message>**');
      message.channel.send({embed: errEmbed})
      return;
    }

      const sayMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let esayEmbed = new Discord.RichEmbed()
      .setTitle("Say")
      .setColor("#0537ff")
      .setThumbnail(servIcon)
      .setDescription(`Said by ${message.author}`)
      .addField("Message", `${sayMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(esayEmbed);
  }