const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {

    let embed = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setColor("#ff00f0")
    .addField("Member Count", message.guild.memberCount, true)
    .addField("Created At", message.guild.createdAt, true)
    .addField("Server Owner", `${message.guild.owner}`, true)
    .addField("Server Region", `${message.guild.region}`, true)

    message.channel.send(embed)

}