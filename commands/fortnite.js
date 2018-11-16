const Discord = require("discord.js")
const keys = require("../events/apikeys.json")
const Client = require('fortnite');
const stats = new Client(keys.fortnite);



exports.run = function(client, message, args, tools) {

let usernamenotfoundembed = new Discord.RichEmbed()
.setTitle("⚠ Whoops...")
.setDescription("Username not found!")
.setColor("#ff573a")



let platform;
let username;

if (!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send("**Please include the platform:** `-fortnite [ pc | xbl | psn ] <user>`")
if (!args[1]) return message.channel.send("**Please include a fortnite username:** `-fortnite [ pc | xbl | psn ] <user>`")

platform = args.shift();
username = args.join(' ');

stats.user(username, platform).then( data => {

const embeddd = new Discord.MessageEmbed()
.setColor('0xffffff')
.setTitle(`Stats for ${data.username}`)
.setDescription(`**Top Placement**\n\n**Top 3s:** *${data.lifetimeStats[0].value}*\n**Top 5s:** *${data.lifetimeStats[1].value}*\n**Top 6s:** ${data.lifetimeStats[0].value}*\n**Top 12s:** *${data.lifetimeStats[4]}`, true)
.addField('Total Score:', data.lifetimeStats[6].value, true)
.addField('Matches Played:', data.lifetimeStats[8].value, true)
.addField('Wins:', data.lifetimeStats[9].value, true)
.addField('Win Percentage:', data.lifetimeStats[7].value, true)
.addField('Kills:', data.lifetimeStats[10].value, true)
.addField('K/D Ratio:', data.lifetimeStats[11].value, true)
.addField('Kills per minute:', data.lifetimeStats[12].value, true)
.addField('Time Played:', data.lifetimeStats[13].value, true)
.addField('Average Survival Time:', data.lifetimeStats[14].value, true)

message.channel.send(embeddd)

})
.catch(error => {
   message.channel.send(usernamenotfoundembed)
})


}

