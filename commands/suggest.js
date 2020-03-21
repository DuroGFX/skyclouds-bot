const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
    
  let reason = args.join(" ")
  
  let reportEmbed = new Discord.RichEmbed()
  .setTitle("Suggestion")
  .setColor(colors.green)
  .addField("Suggestion By", `${message.author}`)
  .addField("Suggestion", reason);
  
  let suggestChannel = message.guild.channels.find(`name`, "suggestions-staff");
  if(!suggestChannel) return message.channel.send("Couldn't find suggest channel!");
  
  
  
  suggestChannel.send(reportEmbed)
  message.channel.bulkDelete(2);
 
};

module.exports.help = {
  name: "suggest" 
};