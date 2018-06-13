const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${message.member.displayName}, you currently don't have permissions to do this command`);

    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let role = message.guild.roles.find("name", args.join(" ").slice(22));

    if (!user) return message.channel.send(`${message.member.displayName}, sadly, I cannot find this user`);
    if (!role) return message.channel.send(`${message.member.displayName}, there is no such role in this discord.`);

    if (user.roles.has(role.id)) return message.channel.send(`${message.member.displayName}, user already has this role.`);
    
    
    await (user.addRole(role.id));
    await message.channel.send(`${message.member.displayName}, gave **${role.name}** to **${user}**`);
}