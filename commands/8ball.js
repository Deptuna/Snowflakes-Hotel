const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //8-ball (question ffaw)
    if(!args[1]) return message.reply ("Please ask a full question!");
    let replies = ["Yes", "No", "Maybe", "I guess", "Hell no", "Hell ya", "Pick whatever your heart tells you"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballemebed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#2dda4f")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballemebed);



}

module.exports.help = {
    name: "8ball"
  }