const Discord = require("discord.js")
const client = new Discord.Client();


exports.run = (client, message, args) => {
    
message.delete()
    
let downtimeee = args[0]
let timedown = args[1]
let dTimeDown = args[2]
let DowntimeD = args[3]


    let dDowntime = new Discord.RichEmbed()
.setColor("#ff573a")
.setTitle(` ⚠ Downtime is expected in ${downtimeee} ${timedown}`)
.setDescription(`Reason: ${dTimeDown} ${DowntimeD}`)

//


if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(dDowntime)
}