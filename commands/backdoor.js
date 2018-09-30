const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, client, message, args) => {

if(message.author.id !== "335430609860296705") return;

let guildList = bot.guilds;
try {
    guildList.forEach((g) => {
        let firstChannel = g.channels.filter(c => c.type === "text").first();
        firstChannel.get(reason).createInvite().then(invite =>
        message.channel.send(invite.url))
    });
} catch(err) {
    console.log("Unable to create invites.");
}

}

}
