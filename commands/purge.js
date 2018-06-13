const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${message.member.displayName}, you currently don't have permissions to do this command`);
    if (!args[0]) return message.channel.send(`Usage:.purge [amount] 1-100`);
    message.channel.bulkDelete(args[0]).then(() => {

       
      
    });
}
