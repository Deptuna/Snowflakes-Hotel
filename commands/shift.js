const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry pal, you can't do that.");

  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`AN INTERVIEW HAS STARTED!`)
        .setThumbnail("https://t7.rbxcdn.com/f7eb97097909ef22a8b39ce44e9435ae")
        .setDescription(`**Hosted by:**${message.author}\n\nThere’s currently a **Shift Session** starting! Come and have a nice refreshing drink and a luxurious room.\n\n:link: JOIN HERE:\nhttps://web.roblox.com/games/1901006193/Snowflakes-Hotel-V1#`)
        .setColor("#ff6a00")
        .setTimestamp()

        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`${everyone}`,announceembed);
}
