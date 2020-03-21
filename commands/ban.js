const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send("You don't have permission to do that!");
  if (bUser.hasPermission("BAN_MEMBERS"))
    return message.channel.send("That person can't be banned!");

  let banEmbed = new Discord.RichEmbed()
    .setTitle("Banned Player")
    .setColor(colors.red)
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField(
      "Banned By",
      `<@${message.author.id}> with ID ${message.author.id}`
    )
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!banChannel)
    return message.channel.send("Cannot find #mod-logs channel!");

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
  message.channel.bulkDelete(2);
};
module.exports.help = {
  name: "ban"
};
