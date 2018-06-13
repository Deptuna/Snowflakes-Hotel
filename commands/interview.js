const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry pal, you can't do that.");

  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`AN INTERVIEW HAS STARTED!`)
        .setThumbnail("https://t7.rbxcdn.com/fadfdbf05bfc74a27fa3f236301f8d1d")
        .setDescription(`**Hosted by:**${message.author}\n\nThere’s currently an **Interview Session** starting! If you’re looking to join Snowflakes Hotel, then why not give it a shot at an Interview?\n\nWe will be starting in **15 minutes.**\n\n:link: JOIN HERE:\nhttps://web.roblox.com/games/1899500951/Snowflakes-Hotel-Interview-Center `)
        .setColor("#ff6a00")
        .setTimestamp()

        let everyone = message.guild.roles.find('name', "@everyone");
        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`${everyone}`,announceembed);
}