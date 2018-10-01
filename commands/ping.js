const Discord = require("discord.js")
const client = new Discord.Client();



module.exports.run = async (bot, message, args) => {
    
let botpinggg = new Discord.RichEmbed()

.setTitle(`Pong! The current MS of the bot is ${bot.ping}!`)
.setColor('00ff00')
.setTimestamp();





message.channel.send(botpinggg)



}