   const Discord = require("discord.js");
   const ms = require("ms");
   const botconfig = require("../config.json");
   
   module.exports.run = async (bot, message, args) => {
      
      let prefix = botconfig.prefix;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0].toLocaleLowerCase();
   
   // REMINDER COMMAND
    if(cmd === `${prefix}reminder`) {

    let remindertime = args[0];
    if(!remindertime) return message.channel.send("Please spesify a time and a note please.");

    let notemessage = args.slice(1).join(" ");
    if(!args[1]) return message.channel.send("Please enter a reminder note.");

    message.channel.send(`A REMINDER HAS BEEN SET FOR **${ms(ms(remindertime))}!**`);

    setTimeout(function() {

        let reminderEmbed = new Discord.RichEmbed()
        .setColor(`RANDO,`)
        .setDescription(`THE **${ms(ms(remindertime))}** YOU MADE IN **${message.guild.name}** HAS BEEN FINISHED**!**`)
        .addField("REMINDER NOTE", `${notemessage}`)
        .setTimestamp()
        .setFooter("SNOW ❆", bot.user.displayAvatarURL);

        message.author.send(reminderEmbed);

    }, ms(remindertime));

    }
    
    }
