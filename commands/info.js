const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  
  const infoEmbed = new Discord.RichEmbed()
  .setTitle("Information")
  .setColor(colors.aqua)
  .setDescription("Welcome the SkyClouds, a SkyBlock based Minecraft Server. This is a Server run by the two Owners, Snuffy and Triple. In this message we will go over the basics of our discord server! Hope you enjoy your stay.")
  .addField("**Basic Rules and Regulations**", "1.) If you are going to put NSFW, make sure to notify the people(s) beforehand. MAKE SURE to put spoilers on it so they choose to view it or not. || on each side of the message is how you do spoilers. Keep NSFW to a minimum.\n\n2.) Maturity. Act your age. Yes, we know people like to fool around and joke, we all do that. But please do not be a little kid. Don't argue with anyone and be a baby about things.\n\n3.) Issues. Any issues with a member you have, contact a staff. Any staff member you have an issue with, contact Head Administration. If you have an issue with Head Administration, contact an Owner.", false)
  .addField("**Ranking Structure**", "This is the order and chain of command you will go to if you need any help. If you fail to do this, you may be lightly punished with something as simple as a warning.\n\nHelper > Moderator > Administrator > Co-Owner > Owner", false);
  
  const channelEmbed = new Discord.RichEmbed()
  .setTitle("Channels")
  .setColor(colors.aqua)
  .setDescription("We have many channels for you to talk in and even read updates about SkyClouds!\n\nIf you want to talk verbally, or listen to music we have multiple voice channels! Varying from Lobby [A] to our Music VC!")
  .addField("**Communication Channels**", "If you are going to talk normally and ON-TOPIC go to <#688476485601984543>. You can converse with others in there.\n\nIf you would to send photos and photos ONLY please use <#688476503478239259> Do NOT type in general!.\n\nIf you would like to go OFF-TOPIC and speak about a random thing, go to <#688476523342331948>", false)
  .addField("**Help Channels**", "We also have a chat for you to use our bot commands, ranging from music, to messing around! <#688476538215202818> is the place for that!\n\nNeed a STAFF MEMBER? Say no more! Go to <#688476618297180194> to get our attention. We will respond as quick as we can. Or go to the Need Staff voice channel.\n\nWant to put a SUGGESTION? Go to our <#688478239810650204> chat and place on there using the command format. More information will be held there.", false)
  .addField("**Informational Channels**", "<#688475077662343206> » This is where the main updates and announcements will be, either relating or not relating to our server.\n\n<#688475867521089545> » In this channel you can do the /apply command and appply for either STAFF or MEDIA role if they are open.\n\n<#688475965051240681> » The report channel is to be used if you need to report a member for any reason. Please if you have it, provide proof. This is NEEDED to help support your report, of course you do not need proof but it is always better and helpful.\n\n<#688478414210203664> » This is a very important channel as you can see the updates and progress of our server during maintenance.", false);
  
  message.channel.send(infoEmbed);
  message.channel.send(channelEmbed); 

};

module.exports.help = {
  name: "infodev1233"
};
