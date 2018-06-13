const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!bUser) message.channel.send("Can't find user!");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MESSAGES");
if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be banned!");

let banEmbed = new Discord.RichEmbed()
.setDescription("**Ban**")
.setColor("#ff0000")
.addField("Banned user", `${bUser} with ID ${bUser.id}`)
.addField("Banned by", `<@${message.author.id}> with id ${message.author.id}`)
.addField("Banned in", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", bReason);

let banChannel = message.guild.channels.find(`name`, "logs");
if(!banChannel) return message.channel.send("Can't find logs channel!");

message.guild.member(bUser).ban(bReason);
banChannel.send(banEmbed);

}
