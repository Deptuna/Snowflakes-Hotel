const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#a8a3a3")
    .addField('Members', `${message.guild.memberCount}`)
    .addField("Online", `${message.guild.members.filter(o => o.presence.status === 'online').size} Online`)
    .addField("Humans", `${message.guild.members.filter(member => !member.user.bot).size}`)
    .addField("Bots", `${message.guild.members.filter(member => member.user.bot).size}`)
    .setTimestamp()

    return message.channel.send(botembed);
  }
 