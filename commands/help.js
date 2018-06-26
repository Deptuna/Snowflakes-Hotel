const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.react("☑");
    message.channel.send({embed: {
      color: 0x1D82B6,
      description: `**Check your DMs ${message.author}!**`
  }})
    message.author.send("Here Is my command list!")
    let modembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Moderation commands:", "``addrole``: Adds the user the desired role.\n``purge``: Deletes the number of messages you choose.\n``removerole``: Removes a user the desired role.\n``mute``: Mutes a user with a time which you choose.\n``announce``: Announces your desired choice.\n``training``: Announces that you are hosting a training session.\n``interview``: Announces that you are hosting an interview session.\n``shift``: Announces that you are hosting a shift session.")
    let userembed = new Discord.RichEmbed()
    .setColor("#15f153")
     .addField("User commands","``8ball``\n``avtar``\n``botinfo``\n``dog``\n``say``\n``flip``\n``createinvite``\n``membercount``\n``serverinfo``\n``ping``\n``rate``\n``ship``\n``roll``\n``dogfact``\n``catfact``\n``should``\n``weather``\n``randomcolor``")
    
    return message.author.send(userembed);
    message.author.send(modembed);
    
  
    
  }
 
 
