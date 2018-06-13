 

        const Discord = require("discord.js");

        module.exports.run = async (bot,message, args) => {
            message.delete();
            if (message.author.id !== "335430609860296705")return;
            if(args[0] == "help"){
              message.reply("Usage: .announce <what to announce>");
              return;
            }
            //>ogłoszenie [message here]
                let announceembed = new Discord.RichEmbed()
                .setTitle(`Guide`)
                .setDescription(`The Oficially Snowflake Hotels training  guide can be found at the link below.`)
                .setColor("RANDOM")
        
        
                let everyone = message.guild.roles.find('name', "@everyone");
                let announceChannel = message.guild.channels.find(`id`, "453627683960782868");
                if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
                
                announceChannel.send(`${everyone}`, announceembed);
            }
            