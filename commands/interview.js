const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry pal, you can't do that.");

  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`AN INTERVIEW HAS STARTED!`)
        .setThumbnail("https://cdn.discordapp.com/attachments/497176168382857236/498052032230326283/a7fa0a0d9dfe6cecf1ddd0e394d3c4e0.png")
        .setDescription(`**Hosted by:**${message.author}\n\nThere’s currently an **Interview Session** starting! If you’re looking to join Snowflakes Hotel, then why not give it a shot at an Interview?\n\nWe will be starting in **15 minutes.**\n\n:link: JOIN HERE:\nhttps://www.roblox.com/games/2200659002/Interview-Center-II-Snowflake-Hotels`)
        .setColor("#ff6a00")
        .setTimestamp()

        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`@here`, announceembed);
}
