const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {

          let rate = args.slice(0).join(' ')
        if (!rate) {
            return message.reply("Insert the Argument!")
        }

        var ratewaifu = ["0/10", "1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"]
        var tryrate = ratewaifu[Math.floor(Math.random() * ratewaifu.length)];

        message.channel.send(`:thinking: | **${message.author.username}**, I will give it, ${tryrate} for ${rate}.`)
  
}