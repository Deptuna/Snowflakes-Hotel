const config = require('../config.json');
exports.run = (client, message, args) => {
    if (!config.owner.includes(message.author.id)) return;
    let newavatartime = message.content.split(" ").slice(1);
    let blasty = newavatartime.join(" ");
    if(!blasty.startsWith('http')){
    message.reply(`New Avatar Set : ./images/${blasty}.png`);
    client.user.setAvatar(`./images/${blasty}.png`);
    }else {
    message.reply(`New Avatar Set : ${blasty}`);
    client.user.setAvatar(blasty);
    }
    
    }
    