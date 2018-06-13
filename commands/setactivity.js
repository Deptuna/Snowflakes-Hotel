const config = require("../config.json");

exports.run = (client, message, args) => {
    if (!config.owner.includes(message.author.id)) return;
    let game = message.content.split(' ').slice(1)
    let playing = game.join(' ')
    message.reply("New Game Set");
    client.user.setActivity(playing)
    }