const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {



let days = "10"

if(message.author.id === "176246723524558850", "344010742166585344"){
let cheistasm = new Discord.RichEmbed()
.setTitle('Christmas Countdown:')
.setColor("#ff573a")
.setDescription(`There are currently ${days} days until christmas!`)
.setFooter('Australian Eastern Standart Time')

message.channel.send(cheistasm);
}
else {
    message.reply('You do not have permission for this command!')
}};



