const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p+c);

        message.channel.sendMessage(`**Add : ${numArray}**, ` + `Total = ${total}`);

}