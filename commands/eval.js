const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async (client, message, args) => {
    if (!config.prime.includes(message.author.id)) return;
    message.delete()

    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.author.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}
