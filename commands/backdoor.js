let config = (..\config.json)

exports.run = (Discord, client, message, args) => {
     if (!config.owner.includes(message.author.id))return message.react("❌");
    
    message.react("✅")
    
let reason = args.slice(0).join(" ");
client.channels.get(reason).createInvite().then(invite =>
    message.channel.send(invite.url));
}
