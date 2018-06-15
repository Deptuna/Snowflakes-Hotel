const config = require('../config.json');

exports.run = (client, message, args, tools) => {

     if (!config.owner.includes(message.author.id))return message.react("❌");
        message.react("☑");
   const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.author.send(`= Guild List =\n\n${guildArray.join("\n")}`, {code:'asciidoc'})
  }
