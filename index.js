var Discord = require("discord.js");

var client = new Discord.Client();

const fs = require("fs");

const config = require("./config.json");

const superagent = require("superagent");

client.on("ready", () => {
  console.log(`BOT UP AND RUNNING\nGUILDS: ${client.guilds.size}\nMEMBERS: ${client.users.size}`); 

  client.user.setActivity("Snowflakes Hotel | .help");
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members! `);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {

  if(message.author.bot) return;
  
  console.log(message.guild.name + ": " + message.channel.name + ": " + message.author.username + ": " + message.content);
	
if (message.channel.type === 'dm') {
        message.channel.send("**We only accept commands in the server). The comamnd prefix is '.' **")
        return;
};
  

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
	return;
  } catch (err) {
      console.log(err);
  }

});

client.login(process.env.token);
