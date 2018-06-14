const Discord = require("discord.js")

exports.run = (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("❌ | User Not Found!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author}, **🔒 | Sorry, But You Dont Have Access To This Command.**`);
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ | Failed To **Kick**, *Need Higher Role*.");
    
    
      
        return message.channel.send(`✅ | ${kUser} Has Been **Kicked**`);
};
