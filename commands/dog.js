const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Dog :dog:")
  .setImage(body.url)
  .setFooter("Requested by: "+message.author.tag, message.author.avatarURL)
  .setTimestamp()

  message.channel.send(dogembed);

}