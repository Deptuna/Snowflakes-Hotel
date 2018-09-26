const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry pal, you can't do that.");

  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`AN INTERVIEW HAS STARTED!`)
        .setThumbnail("https://t3.rbxcdn.com/b9fb2f347ec34a9ebeab3efa176dc1b2")
        .setDescription(`**Hosted by:**${message.author}\n\nThere’s currently an **Interview Session** starting! If you’re looking to join Snowflakes Hotel, then why not give it a shot at an Interview?\n\nWe will be starting in **15 minutes.**\n\n:link: JOIN HERE:\nhttps://www.roblox.com/games/2200659002/Interview-Center-II-Snowflake-Hotels`)
        .setColor("#ff6a00")
        .setTimestamp()

        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`@here`, announceembed);
}
