const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.react("☑");
    message.channel.send({embed: {
      color: 0x1D82B6,
      description: `**Check your DMs ${message.author}!**`
  }})
    message.author.send("Here Is my command list!")
    let botembed = new Discord.RichEmbed()
    .setTitle("Help information")
    .setColor("#15f153")
    .addField("User commands","``8ball``\n``avtar``\n``botinfo``\n``dog``\n``say``\n``flip``\n``createinvite``\n``membercount``\n``serverinfo``\n``ping``\n``rate``\n``ship``\n``roll``\n``dogfact``\n``catfact``\n``should``\n``weather``\n``randomcolor")
    .addField("Moderation commands:", "``addrole``\n``purge``\n``removerole``\n``tempmute``\n``announce``\n``training``\n``interview``\n``shift``")
    .addField("Bot Owner commnds:", "``eval``\n``setactivity``\n``setstatus``\n``shutdown``\n``setavatar``\n``restart``\n``reload``\n``guilds``\n``stats``");
    return message.author.send(botembed);
  }
 
 
