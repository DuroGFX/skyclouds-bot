const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig")

module.exports.run = async (bot, message, args) => {
  let MusicEmbed = new Discord.RichEmbed()
        .setColor(colors.green)
        .setTitle("Advancius Music Help")
        .addField("**Play Command**", `**>play** to start listening to music`, false)
        .addField("**Skip Command**", `**>skip** to skip a song`, false)
        .addField("**Stop  Command**", `**>stop** to disconnect the bot`, false)
        .setFooter(`mc.advancius.net`, bot.user.displayAvatarURL);
        message.channel.send({embed: MusicEmbed});
   };

module.exports.help = {
  name: "music"
};
