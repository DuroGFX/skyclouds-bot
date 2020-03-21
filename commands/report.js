const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
    
  
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);
  
  let reportEmbed = new Discord.RichEmbed()
  .setTitle("Reports")
  .setColor(colors.pink)
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  
  let reportschannel = message.guild.channels.find(`name`, "report");
  if(!reportschannel) return message.channel.send("Couldn't find report channel!");
  
  
  
  reportschannel.send(reportEmbed)
  message.channel.bulkDelete(2);
 
};

module.exports.help = {
  name: "report" 
  
};