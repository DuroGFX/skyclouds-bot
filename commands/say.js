const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
  
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const text = args.join(" ");
    
    if(text.length < 0) return message.channel.send("Please provide an argument.");
    
    message.delete();
    message.channel.send(text);
    
  }
      
}

module.exports.help = {
  name: "say"
};