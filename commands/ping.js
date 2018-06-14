    const Discord = require('discord.js')
    exports.run = async (client, message, args, color) => {
    
            let embed = new Discord.RichEmbed()
            .setTitle(`:ping_pong:`+Math.round(client.ping)+`ms!`)
            .setColor(0xff2f2f)
            message.channel.send(embed);
    
    }
    
