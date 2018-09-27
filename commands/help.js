const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.react("☑");
    message.channel.send({embed: {
      color: 0x1D82B6,
      description: `**Check your Dms ${message.author}!**`
  }})
    let embed = new Discord.RichEmbed()
    .setColor("#15f153") 
    .addField("Commands","``interview``\n``training``\n``shift``\n``8ball``\n``avatar``\n``botinfo``\n``dog``\n``say``\n``flip``\n``membercount``\n``serverinfo``\n``ping``\n``rate``\n``ship``\n``dogfact``\n``catfact``\n``should``\n``weather``\n``randomcolor``\n``rps``\n``timer``\n``report``")
        
    
   message.author.send(embed);
  }
 
 
