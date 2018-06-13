
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "335430609860296705")return;
 await message.channel.send("**Welp.. Im Rebooting See You Soon..**")
  process.exit()
  client.destroy()
  
}