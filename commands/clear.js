const Discord = require('discord.js')

exports.run = async (client, message, args) => {
            if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            if (isNaN(args[0])) return message.channel.send(':warning: `Please supply a valid amount of messages to purge`');
            if (args[0] > 100) return message.channel.send(':warning: `Please supply a number less than 100`');
            message.channel.bulkDelete(args[0]);
            var cleanEmbed = new Discord.RichEmbed()            
            .setAuthor('Cleared!')
            .setDescription(`Cleared **${args[0]}** messages :white_check_mark:`)
            .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
            .setColor('#880000');
            message.channel.send(cleanEmbed);
}
