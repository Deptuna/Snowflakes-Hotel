const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if (!config.owner.includes(message.author.id)) {
        message.react("❌");
    }
    message.react("☑");
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.author.send(`= Guild List =\n\`\`\`${guildArray.join("\n")}\`\`\``, {code:'asciidoc'})
  }
