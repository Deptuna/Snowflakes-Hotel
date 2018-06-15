const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!config.owner.includes(message.author.id)) {
      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`Only bot owner can use this command`)
      message.channel.send({embed});
      return;
  }
  if(args.length < 1){
    const embed = new Discord.RichEmbed()
    .setColor(cfg.config.wb)
    .setDescription(`No value specified.\n\nUsage: .leaveguild <guild.id>`)
    message.channel.send({embed});
    return;
  }
  if(args.length > 1){
    return;
  }
  var id = args[0]
  var guildsmap = bot.guilds.map(g => g.id)
    if(!guildsmap.includes(args[0])){
      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`I'm not a member of this guild.`)
      message.channel.send({embed});
      return;
    }
  bot.guilds.get(id).leave()
  const embed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .setDescription(`Successfully left from guild.`)
  message.channel.send({embed});
}
