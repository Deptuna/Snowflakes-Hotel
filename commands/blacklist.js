
let Blacklisted = new Discord.RichEmbed()
        .setTitle(":no_entry_sign: Blacklisted")
        .setDescription(`You've been blacklisted from using Zeta, for at least one of the following reasons:\n 1) Misue Of Zeta.\n 2) Stolen Zeta Assets.\n 3) Or any other non-stated reason.`)
        .setFooter("If you'd like to appeal to be whitelisted please contact,£ndo ¶erl#9595")
        .setColor("RED")
        .setThumbnail(message.author.avatarURL);
      
      const blacklisted1 = ["495889956523212802"]
      const blacklisted2 = [""]
      
     if(message.content.startsWith(prefix)) {
         if(message.author.id == blacklisted1, blacklisted2) return message.channel.send(Blacklisted); 
      }
