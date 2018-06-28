const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0]) {
      const errEmbed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setAuthor('ERROR')
      .setTitle(':exclamation: Usage: **say <message>**');
      message.channel.send({embed: errEmbed})
      return;
    }

    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:
      message.channel.send(sayMessage);
  }
