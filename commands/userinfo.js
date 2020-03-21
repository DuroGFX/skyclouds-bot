const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message) => {
  
	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
	
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("Nickname:", `**${member.nickname !== null ? `${member.nickname}` : 'None'}**`, false)
		.addField("Created At (ET):", `**${moment.est(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}**`, false)
		.addField("Joined Server (ET):", `**${moment.est(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}**`, false)
		.addField("Status:", `**${user.presence.status}**`, false)
		.addField("Playing:", `**${user.presence.game ? user.presence.game.name : 'None'}**`, false)
    .addField("Roles:", `**${member.roles.map(roles => `${roles.name}`).join(', ')}**`, false)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`);
     message.channel.send({embed});
    };


  
module.exports.help = {
  name: "userinfo"
};