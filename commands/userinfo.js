const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    let user = message.author
    let resu = user.joined

    let userInfo = new Discord.RichEmbed()
        .setAuthor(`${user.username}'s User Info`)
        .setColor("#ff0000")
        .addField("Created At", user.createdAt)
        .addField("User joined:", resu)
        

    message.channel.send(userInfo);

}