const Discord = require('discord.js');

module.exports.run = async (bot, message) => {

	message.delete();
	const [question, ...answers] = message.content.trim().split(' ').slice(1).join(' ').split('|');
        const embed = new Discord.RichEmbed()
            .setAuthor('Ankieta', message.client.user.displayAvatarURL)
            .setColor('RANDOM')
            .addField('Pytanie', question)
            .addField('Odpowiedzi', answers.map((answer, index) => {
                let indicator;

                switch (index) {
                    case 0:
                        indicator = '🇦';
                        break;
                    case 1:
                        indicator = '🇧';
                        break;
                    case 2:
                        indicator = '🇨';
                        break;
                    case 3:
                        indicator = '🇩';
			break;
                    case 4:
                        indicator = '🇪';
			break;
		    case 5:
                        indicator = '🇫';
			break;
		    case 6:
                        indicator = '🇬';
			break;
		    case 7:
                        indicator = '🇭';
			break;
                }

                return `${indicator} ${answer}`;
            }).join('\n'))
            .setFooter(`Stworzona przez ${message.member.displayName}`, `${message.author.displayAvatarURL}`);


        const newMessage = await message.channel.send(embed);

        switch (answers.length) {
            case 2:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                break;
            case 3:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                break;
            case 4:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                await newMessage.react('🇩');
            case 5:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                await newMessage.react('🇩');
                await newMessage.react('🇪');
	    case 6:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                await newMessage.react('🇩');
                await newMessage.react('🇪');
		await newMessage.react('🇫');
	    case 7:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                await newMessage.react('🇩');
                await newMessage.react('🇪');	
		await newMessage.react('🇫');
                await newMessage.react('🇬');
	    case 8:
                await newMessage.react('🇦');
                await newMessage.react('🇧');
                await newMessage.react('🇨');
                await newMessage.react('🇩');
                await newMessage.react('🇪');
		await newMessage.react('🇫');
                await newMessage.react('🇬');
		await newMessage.react('🇭');	
        }

        return newMessage;
    
};
