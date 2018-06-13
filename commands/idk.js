 

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
        .setTitle(`Ranks`)
        .setThumbnail("https://images-ext-1.discordapp.net/external/BSq_yth46LrR7VyXROAbNep2nABZX64wZtycn7wtrtA/https/cdn.discordapp.com/icons/453623751284621342/80833196c339402a966267e914500780.jpg?width=80&height=80")
        .setDescription(`These are our ranks briefings.

        **Low Ranks (LRs)**
            
    [4] Housekeeping
    [5] Cafe Worker
    [6] Security
    [7] Receptionist
            
        They have permissions to work at the hotel, they will be kicked in other Snowflakes' buildings.
            
        **Middle/Medium Ranks (MRs)**
            
        [8] Management
        [9] Senior Management
        [10] Developer
        [11] Executive Board
        [12] Hotel Manager
            
        They have permissions to work, interview and train.
            
        **High Ranks (HRs)**
            
        [13] General Manager
        [14] Chief Operations Officer
        [15] Vice President
        [16] President

        They have permissions to host, interview, train, help, promote and demote.
            
        **Super High Ranks (SHRs)**
            
        [17] Head Developer
        [18] Group Manager
        [19] Group Owner
            
        They have all permissions and all users **must** obey to every request stated by them. Doing the opposite, will result in several punishments such as : firing, permanent suspension and suspension.
            
        *Thank you for reading,
        Snowflakes Administrative Team
        SHR*`)
        .setColor("RANDOM")


        let announceChannel = message.guild.channels.find(`id`, "454667386180861962");
        if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
        
        announceChannel.send( announceembed);
    }
    