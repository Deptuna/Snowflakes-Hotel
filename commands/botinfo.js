const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Bot Information**")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Owner", "￵￶￵ 👿 Frank 👻#9595 (335430609860296705)")
    .addField("Co-Owner", " ig.DrFatCafe#0001 (453227176280457267)")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", `Sat May 05 2018 `)
    .setFooter("Requested by: "+message.author.tag, message.author.avatarURL)
    .setTimestamp()

    return message.channel.send(botembed);
  }
 
  module.exports.help = {
    name: "botinfo"
  }
