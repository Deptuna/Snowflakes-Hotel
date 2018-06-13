const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) =>{
  let {body} = await superagent
      .get(`https://dog-api.kinduff.com/api/facts`);
      let fact = body.facts
      message.reply(fact)
}
