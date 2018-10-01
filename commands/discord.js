const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {

message.delete();


let dclink = new Discord.RichEmbed()
.setColor('#1014f2')
.setTitle('Our discord!')
.setDescription("**https://discord.gg/ebyRYgF**")
.addField("In this discord, you will be notified *if* the bot is going to go offline!", "You will also be notified new changes to the bot! Enjoy!")

message.channel.send(dclink);

}