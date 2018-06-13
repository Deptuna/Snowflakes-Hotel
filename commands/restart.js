 const Discord = require("discord.js");
 const config = require('../config.json');

module.exports.run = async (client,message,args) => {

 const token = config.token;

 if (!config.owner.includes(message.author.id)) return;


 message.channel.send('Restarting...')
     client.destroy()
    .then(() => client.login(token))
    .then(() => message.channel.send("Restarted!"))
    .then(() => console.log("Restarted"));
  }