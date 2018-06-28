const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      let PunchUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const PunchEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, punched ${PunchUser} in the FACE!`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(PunchEmbed)
}