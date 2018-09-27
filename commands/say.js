const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

 
   
    const sayMessage = args.join(' ');
    if(!args[0]) return;
    message.delete()
   
    const embed = new Discord.RichEmbed()
   
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(sayMessage)
    .setTimestamp()
    .setColor(0x36393F)
   
    message.channel.send(embed)
}

