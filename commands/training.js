const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry pal, you can't do that.");

  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`A TRAINING HAS STARTED!`)
        .setThumbnail("https://t2.rbxcdn.com/7ee1a4609d47281e36c92c140df9df82")
        .setDescription(`**Hosted by:**${message.author}\n\nThere’s currently a **Training Session** starting! If you’re looking to rank up in Snowflakes Hotel, then why not give it a shot at a Training?\n\nWe will be starting in **15 minutes.**\n\n:link: JOIN HERE:\nhttps://www.roblox.com/games/2261650696/Training-Center-II-Snowflakes-Hotels`)
        .setColor("#ff6a00")
        .setTimestamp()

        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`@here`, announceembed);
}
