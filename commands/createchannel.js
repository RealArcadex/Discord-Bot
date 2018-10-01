const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    let noPermissions = new Discord.RichEmbed()
    .setTitle(":warning: Whoops...")
    .setDescription("You need the ``MANAGE_CHANNELS`` permission to use this feature!")
    .setColor("#ff573a")

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(noPermissions)

    let cNameEmbed = new Discord.RichEmbed()
    .setTitle(":warning: Whoops...")
    .setDescription("You must specify a channel name! | ``-createchannel <name> <voice|text|category|>``")
    .setColor("#ff573a")

    let cReturnsEmbed = new Discord.RichEmbed()
    .setTitle(":warning: Whoops...")
    .setDescription("You must specify a channel name! | ``-createchannel <name> <voice|text|category|>``")
    .setColor("#ff573a")

    let cName = args[0]
    if(!cName) return message.channel.send(cNameEmbed)
    let cReturns = args[1]
    if(!cReturns) return message.channel.send(cReturnsEmbed)

    if(message.member.hasPermission("MANAGE_CHANNELS")) return message.guild.createChannel(cName, cReturns);
 
}