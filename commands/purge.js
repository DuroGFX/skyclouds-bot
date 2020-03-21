const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig")

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that!")
  if(!args[0]) return message.channel.send("Please add another argument")
  if(args[0] > 100) return message.channel.send("Please provide a number less than 101!")
  let purgeEmbed = new Discord.RichEmbed()
  .setTitle("Purge")
  .setColor(colors.yellow)
  .addField("Amount Purged", `${args[0]}`)
  .addField("Channel Purged", message.channel)
  .addField("Time", message.createdAt)
  
  let purgeChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!purgeChannel) return message.channel.send("Cannot find #mod-logs channel!");
  
  message.channel.bulkDelete(args[0]).then(() =>{
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000))
    purgeChannel.send(purgeEmbed)
  });
  
};

module.exports.help = {
  name: "purge"
};
