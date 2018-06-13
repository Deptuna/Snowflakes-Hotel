const config = require('../config.json');

        const Discord = require("discord.js");

        module.exports.run = async (bot,message, args) => {
            message.delete();
            if (!config.owner.includes(message.author.id)) return;
        
            
            //>ogłoszenie [message here]
                let announceembed = new Discord.RichEmbed()
                .setTitle(`RULES`)
                .setDescription(`Hello Snowflake staff, welcome to the Snowflake Hotels Discord server, while staying in the Snowflake Hotels Discord server, you have rules while you are in this server.

        :warning:️1) NSFW is NOT allowed, any staff adding that will be banned.:warning:️
        :x:2)  Do not sexually harass someone, if you’re reading this and are laughing at the word sexually it’s not funny.:x:
        :speaking_head:3) Respect higher ranks and lower ranks, disrespect towards them will result in a warning, 3 3 warnings will be a kick, 3 kicks is a ban. :speaking_head:
        4) DO NOT scam, scamming will lead into an INSTANT BAN from the server.
        5) Do not advertise without permission from a Chairperson+ in the server.
        6) Do not spam tag, if you spam someone in a tag, you’ll be banned from the server of Snowflake Hotels.
        7) Do not talk at #announcements , failing to do so will result in a kick from the server.
        8) Do not use foul language unless you have permission to.
        9) Do not advertise, doing so will result in a ban. ( perms needed by 17+)
        10) Do not have fights (or be included) doing so will possibly get you demoted and kicked from the server.`)
                .setColor("RANDOM")
      
        
        
                let announceChannel = message.guild.channels.find(`id`, "454667937010155520");
                if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
                
                announceChannel.send(announceembed);
            
        }