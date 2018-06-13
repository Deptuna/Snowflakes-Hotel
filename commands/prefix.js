const Discord = require("discord.js"); 
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (!config.owner.includes(message.author.id)) return;
    message.delete();


    let botembed = new Discord.RichEmbed()
    .setColor('RANDOM')
        .setTitle("What should the new prefix be?")
        .addField('Preifx', `Prefix Is the command that you need to start with for example: **?help, !verify.** Please send your desire of the new prefix In #general. Thank you.`)
        .setThumbnail(`https://prefixlegal.ca/images/Logo-ENG.png`)
        .setFooter("Requested by: "+message.author.tag, message.author.avatarURL)
        .setTimestamp()

    return message.channel.send(botembed);
  }
