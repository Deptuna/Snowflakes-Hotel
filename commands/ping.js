
    const Discord = require('discord.js')
exports.run = async (client, message, args, color) => {

        let API = (client.ping).toFixed(2)
        let embed = new Discord.RichEmbed()
        .setTitle(`:ping_pong: ${API}ms!`)
        .setColor(0xff2f2f)
        message.channel.send(embed);

}
