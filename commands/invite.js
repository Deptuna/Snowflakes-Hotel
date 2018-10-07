exports.run = (client, message, args) => {
    const config = require('../config.json');
    if (!config.prime.includes(message.author.id)) return;
	message.reply("Hey! Use this link to add me to your server!\nhttps://discordapp.com/api/oauth2/authorize?client_id=442378357250719764&permissions=0&scope=bot");
}




