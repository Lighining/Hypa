const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     let gUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let item = args.join(" ").slice(22);


    const GiveEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Nice!")
    .addField("Oh wow", `${message.author}, gave ${gUser} ${item}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(GiveEmbed)
}