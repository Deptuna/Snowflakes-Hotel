const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {

          let rate = args.slice(0).join(' ')
        if (!rate) {
            return message.reply("Insert the Argument!")
        }

        var ratewaifu = ["0/20", "1/20", "2/20", "3/20", "4/20", "5/20", "6/20", "7/20", "8/20", "9/20", "10/20","11/20","12/20","13/20","14/20","15/20","16/20","17/20","18/20","19/20","20/20 :smile:",]
        var tryrate = ratewaifu[Math.floor(Math.random() * ratewaifu.length)];

        message.channel.send(`:thinking: | **${message.author.username}**, I will give it, ${tryrate} for ${rate}.`)
  
}
