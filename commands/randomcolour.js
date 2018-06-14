var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
let thumbnail = client.user.avatarURL;
let colour1 = randomColor

    var embedinfo = new Discord.RichEmbed()
        .setAuthor(name,thumbnail)
        .setColor(colour1)
        .setTitle("Random Color")
        .setDescription("Result: " + colour1)
    message.channel.sendEmbed(embedinfo);
    

}
