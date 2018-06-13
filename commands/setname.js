const config = require('../config.json');

exports.run = (client, message, args) => {
    if (!config.owner.includes(message.author.id)) return;

    let doit = message.content.split(" ").slice(1);
    let pikapi = doit.join(" ");
    message.reply('New Name Set!');
    client.user.setUsername(pikapi);
    }