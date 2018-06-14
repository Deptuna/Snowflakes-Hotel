var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
let thumbnail = client.user.avatarURL;
let colour1 = randomColor

    var embedinfo = new Discord.RichEmbed()
        .setAuthor(name,thumbnail)
        .setColor(colour1)
        .setTitle("Random Color")
        .setDescription("Result: " + colour1)
    message.channel.sendEmbed(embedinfo);
    

}
