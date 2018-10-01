const Discord = require("discord.js")
const client = new Discord.Client();
const settings = require('../settings.json');
const ms = require("ms")

exports.run = (client, message, args) => {

    message.delete();

    let dEmbed = new Discord.RichEmbed()
    .setColor("#fff600")
    .setTitle("Last Test Time")
    .setDescription(`${settings.datelast}`)

    message.channel.send(dEmbed)

    let dEmbed2 = new Discord.RichEmbed()
    .setColor("#fff600")
    .setTitle("Current Date Time")
    .setDescription(`${settings.dateC}`)

    message.channel.send(dEmbed2)


}