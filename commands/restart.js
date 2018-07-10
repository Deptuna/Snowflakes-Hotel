 const Discord = require("discord.js");
 const config = require('../config.json');

module.exports.run = async (client,message,args) => {


 if (!config.owner.includes(message.author.id)) return;


 message.channel.send('Restarting...')
     client.destroy()
    .then(() => client.login(process.env.token))
    .then(() => message.channel.send("Restarted!"))
    .then(() => console.log("Restarted"));
  }
