const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
  //tempmute @user 1s/m/h/d
  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermission(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create rol
  
  await(tomute.removeRole(muterole.id));
  message.reply(`<@${tomute.id}> has been unmuted`);
  
  
  
  
};
  
module.exports.help = {
  name: "unmute"
};