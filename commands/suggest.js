const Discord = require("discord.js")

exports.run = (bot, message, args) => {
               let suggestmessage = args.join(" ");
    if (!suggestmessage) {
        return message.reply("❌ | Please Include The **Suggest** Messages Too!")
    }

    let channel = message.guild.channels.find('id', '457512287201394698');
    if (!channel) {
        return message.channel.send("❌ | This Server Doesn't Has A `suggestion` Channel!")
    }

    let embed = new Discord.RichEmbed()
    .addField("💡 | Suggestion", `${suggestmessage}`)
    .setFooter(`• Suggestion By: ${message.author.tag}`)
    .setTimestamp()
    .setColor('RANDOM')
    channel.send({embed}).then(message => {message.react("✅").then(r =>message.react("❌"))});
    message.channel.send(`✅ | Succes Creating **Suggestion**!`)
    return;
};
