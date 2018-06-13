const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});


module.exports.run = async (bot, message, args, username) => {
    message.channel.createInvite()
    .then(invite => message.channel.send(`${message.author} here is that invite you asked for: https://discord.gg/${invite.code}`))
    .catch(console.error);;
}
