const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (!config.owner.includes(message.author.id)) return;

    message.react("✅") 
    message.author.send(`= Guild List =\n\n${client.guilds.map(g => g.name).join("\n")}`, {code:'asciidoc'});
    }