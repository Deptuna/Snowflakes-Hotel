const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {

  let replies = ["1", "2", "3", "4", "5", "6", "Error Occured"];

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#000000")
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);
}
