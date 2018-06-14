const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry pal, you can't do that.");

  
    if(!args[0]) return message.reply ("Please say something full to announce!");
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`:mega: ANNOUNCEMENT`)
        .setThumbnail(message.guild.iconURL)
        .setDescription(`**Announced by:**${message.author}\n`+ args.join(" "))
        .setColor("#ff6a00")
        .setTimestamp()

        let split = args.slice(1);
        let url = args[2]


        let announceChannel = message.guild.channels.find(`name`, `announcements`);
        if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
        
        announceChannel.send(`<@&456837126428819456>`, announceembed);
}
