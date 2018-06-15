   module.exports.run = async (bot,message, args) => {
   
   setInterval(function() {
        let user = message.mentions.users.first()
            user.send('LMAO LOL')
    }, 1)
}
