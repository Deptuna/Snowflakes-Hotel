const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Usage: .say [anything]`);

  message.delete();
  let embedarg = args.slice(0).join(' ')
message.channel.send(embedarg);
}
