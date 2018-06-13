const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) =>{
  let {body} = await superagent
      .get(`https://catfact.ninja/fact`);
      let fact = body.fact
      message.reply(fact)
}
