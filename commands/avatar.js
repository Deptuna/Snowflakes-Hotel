var Discord = require('discord.js');
exports.run = (client,message,args)=>{
    var usuario = message.mentions.users.first();
    if(message.mentions.users.size <= 0){
      usuario = message.author;
    }
    var embedavatar = new Discord.RichEmbed()
    .setColor(0xFFCF40)
    .setDescription(`Click [here](${usuario.avatarURL}) to view full avatar!`)
    .setImage(usuario.avatarURL)
    .setFooter("Requested by: "+message.author.tag, message.author.avatarURL)
    message.channel.send(embedavatar)
    }

















