const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

 
   
    const sayMessage = args.join(' ');
    if(!args[0]) return;
    message.delete()
   
    const embed = new Discord.RichEmbed()
   
    .setDescription(sayMessage)
    .setColor("RANDOM")
   
    message.channel.send(embed)
}

