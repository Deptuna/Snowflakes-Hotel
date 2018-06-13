const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry pal, you can't do that.");
    let embedarg = args.slice(0).join(' ')
  
    //>ogłoszenie [message here]
        let announceembed = new Discord.RichEmbed()
        .setTitle(`A HR TRAINING HAS STARTED!`)
        .setThumbnail("https://t2.rbxcdn.com/7ee1a4609d47281e36c92c140df9df82")
        .setDescription(`**Hosted by:** @Kaiii#3657 \n\nThere’s currently a **HR TRAINING** starting! If you’re looking to Be a HR at Snoflakes Hotel, then why not give it a shot at an training?\n\nWe will be starting in **20 Minutes.**\n\n:link: JOIN HERE:\nhttps://web.roblox.com/games/1901320327/Snowflakes-Hotel-Training-Centre`)
        .setColor("#ff6a00")
        .setTimestamp()

        let split = args.slice(1);
        let url = args[2]

        let everyone = message.guild.roles.find('name', "@everyone");
        let announceChannel = message.guild.channels.find(`name`, `sessions`);
        if(!announceChannel) return message.channel.send("Couldn't find sessions channel.");
        
        announceChannel.send(`${everyone}`, announceembed);
}
