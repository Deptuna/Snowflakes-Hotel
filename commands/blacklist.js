const Discord = require("discord.js");
const database = require("../database.js");
 exports.run = (client, message, args) => {
  
  if (!['335430609860296705'].includes(message.author.id))
  return message.reply('Comando restrito! Apenas proprietários do bot podem usar!');
        let block = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.slice(0).join(' ')
            ? args.slice(0).join(' ')
            : null;
 if (!block) return message.reply('Mencione alguém ou especifique um ID!');
let user = client.users.has(block) ? client.users.get(block) : null;
if (user) {
    database.Lista.findOne({"_id":user.id},function(erro,documento){
        
    if (documento) {
        
        documento.block = user.id
        message.reply(`O usuário: \`\`${user.username}\`\` foi colocado na blacklist`)
        documento.save();
    } else {
        var pessoa = new database.Lista({
            _id: user.id,
            name: user.username, 
            block: user.id
          
        })
        pessoa.save()
message.reply(`O usuário: ${user.username} foi colocado na blacklist`)
    }
 })
