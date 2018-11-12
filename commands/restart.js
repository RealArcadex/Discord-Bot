const Discord = require("discord.js")
const client = new Discord.Client();
const settings = require('../settings.json');

exports.run = function(client, message, args) {


let embedd = new Discord.RichEmbed()
.setTitle(':white_check_mark: Success!')
.setDescription("Bot Successfully restarted!")
.setColor("#7CFC00")

let errorembed = new Discord.RichEmbed()
.setTitle(`⚠ Whoops...`)
.setDescription('You can not execute that command!')
.setColor("#ff573a")

if(message.author.id === "176246723524558850", "344010742166585344"){
    message.delete();
    client.destroy().then(client.login(settings.token)).then(console.log('Bot is being restarted by' + message.author)).then(message.channel.send(embedd));

}  else {
    message.channel.send({embed: {
        color: 15158332,
        title: "Error",
        description: `⚠ Please provide an argument.`
    }}).then(msg =>{
        msg.delete(3500)
    });
}
} else {
message.channel.send(errorembed)
}
};}







}