const config = require('../config.json');
exports.run = (client, message, args) => {
    
  //check if it's me
  if (!config.owner.includes(message.author.id)) return;


  //check for file name
  if(!args[0]) return message.channel.send("Please provide a command to reload!");

  //look for file (if it exists)
  try {
      //try to relaod
      delete require.cache[require.resolve(`./${args[0]}.js`)]
  } catch(err) {
      //prevent crash in case file doesn't exist
      return message.channel.send(`Couldn't find ${args[0]}.js`);
  }
  //if all works well you should get this message
  message.reply(`The file ${args[0]}.js has been reloaded`);
};