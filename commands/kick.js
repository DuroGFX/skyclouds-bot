const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig")

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission to do that!");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
  
  let kickEmbed = new Discord.RichEmbed()
  .setTitle("Kicked Player")
  .setColor(colors.red)
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);
  
  let kickChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!kickChannel) return message.channel.send("Cannot find #mod-logs channel!");
  
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed)
  message.channel.bulkDelete(2);
  
};
module.exports.help = {
  name: "kick"
};