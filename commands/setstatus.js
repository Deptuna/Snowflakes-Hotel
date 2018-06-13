const config = require('../config.json');
exports.run = (client, message, args) => {
      if (!config.owner.includes(message.author.id)) return;

      if(args[0].toLowerCase() === "idle"){
      message.reply("New Status Set")
      client.user.setStatus("idle");
      }else
      if(args[0].toLowerCase() === "online"){
      message.reply("New Status Set")
      client.user.setStatus("online");
      }else
      if(args[0].toLowerCase() === "dnd"){
      message.reply("New Status Set")
      client.user.setStatus("dnd");
      }else
      if(args[0].toLowerCase() === "invisible"){
      message.reply("New Status Set")
      client.user.setStatus("invisible");
      }
        
      }
      
