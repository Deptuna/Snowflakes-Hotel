var Discord = require("discord.js");


var client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  client.user.setStatus("dnd");
};