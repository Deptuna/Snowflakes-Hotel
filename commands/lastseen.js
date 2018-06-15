const Discord = require('discord.js');
exports.execute = async (bot, message, args) => {
  try {
    let user;
    if (message.mentions.users.size) {
      user = message.mentions.users.first();
    }
    else if (args.id) {
      user = await message.guild.fetchMember(args.id);
      if (user) {
        user = user.user;
      }
    }
    if (!user) {
      const embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Please mention a valid member of this server.\n\nUsage: .lastseen <@username> `)
        message.channel.send({embed})
        return;
    }

    let color, description;
    if (user.lastMessageID) {
      let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
      let seconds = lastSeen / 1000;
      let days = parseInt(seconds / 86400);
      seconds = seconds % 86400;
      let hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);

      lastSeen = `${seconds}s`;
      if (days) {
        lastSeen = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
      else if (hours) {
        lastSeen = `${hours}h ${minutes}m ${seconds}s`;
      }
      else if (minutes) {
        lastSeen = `${minutes}m ${seconds}s`;
      }

      description = `I've seen ${user.tag} ${lastSeen} ago.`;
    }
    else {
      description = `I've not seen ${user.tag} in a while.`;
    }

    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`${description || lastSeen}`)
      message.channel.send({embed});
  }
  catch (e) {
    console.log(e);
  }
};
