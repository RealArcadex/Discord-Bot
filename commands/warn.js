const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

//add message.delete();

let userr = `${member.tagged}`


let warneeed = new Discord.RichEmbed()
.setTitle('Warn!')
.setDescription(`${userr} **HAS BEEN WARNED!**`)



message.channel.send(warneeed);






}