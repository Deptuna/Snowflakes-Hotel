const roblox = require('noblox.js');
const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Only MR/HR can rank people!");
const groupId = 4129939;
const maximumRank = 255;
let staffc = message.guild.channels.find("name", "promotions") 
if (!args[0]) return message.channel.send(`Usage: .promote [user], [rank]`);
	
roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						roblox.promote(groupId, id)
						
						.then(function(roles){
							message.channel.send(`Promoted user ${username} from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Promote\n**Target:** ${username}\n**User:** ${message.author.tag}\n**Old Rank:** ${roles.oldRole.Name}\n**New Rank:** ${roles.newRole.Name}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}
