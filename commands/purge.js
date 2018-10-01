const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    let nullMessageInteger = new Discord.RichEmbed()
    .setTitle("⚠ Whoops...")
    .setDescription("Please specify a number between 1 and 100 to purge!")
    .setColor("#ff573a")

    let IntegerLessMax = new Discord.RichEmbed()
    .setTitle("⚠ Whoops...")
    .setDescription("Please specify a number less than 100!")
    .setColor("#ff573a")

    let successEmbed = new Discord.RichEmbed()
    .setTitle("🔰 Success!")
    .setDescription(`You have successfully deleted ${args[0]} messages!`)
    .setColor("#ff573a")

    if (isNaN(args[0])) return message.channel.send(nullMessageInteger)
    if (args[0] > 100) return message.channel.send(IntegerLessMax)
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.bulkDelete(args[0])
        .then( messages => message.channel.send(successEmbed)
        .then(msg => {
          msg.delete(5000)
        }));
      }