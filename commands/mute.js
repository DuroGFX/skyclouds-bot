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
  let muteReason = args.join(" ").slice(22);
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await(channel.overwritePermission)(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted`);
  
  let muteEmbed = new Discord.RichEmbed()
  .setTitle("Muted Player")
  .setColor(colors.red)
  .addField("Muted User", `${tomute} with ID ${tomute.id}`)
  .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Muted In", message.channel)
  .addField("Reason", muteReason)
  .addField("Time", message.createdAt);
  
  let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!muteChannel) return message.channel.send("Cannot find #mod-logs channel!");
  
  message.guild.member(tomute);
  muteChannel.send(muteEmbed)
  message.channel.bulkDelete(2);
  
};
  
module.exports.help = {
  name: "mute"
};