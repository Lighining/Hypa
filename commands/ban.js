const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     if(!args[0]) {
   const errEmbed = new Discord.RichEmbed()
   .setColor(0xFF0000)
   .setAuthor('ERROR')
   .setTitle(`:exclamation: Usage: **ban <@member> <Reason>**`);
   message.channel.send({embed: errEmbed})
   return;
 }

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Can't find user!");

    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");

    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#0033ff")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);



    let modlogchannel = message.guild.channels.find(`name`, "mod-log");

    if(!modlogchannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(bUser).ban(bReason);

    modlogchannel.send(banEmbed);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

}

