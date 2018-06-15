
exports.run = (client, message, args, tools) => {

    if(message.author.id !== "335430609860296705") return message.react("❌");
        message.react("☑");
   const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.author.send(`= Guild List =\n\n${guildArray.join("\n")}`, {code:'asciidoc'})
  }
