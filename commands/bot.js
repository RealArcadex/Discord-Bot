const Discord = require("discord.js")
const client = new Discord.Client();
const settings = require('../settings.json');





exports.run = (client, message, args) => {

    let embedd = new Discord.RichEmbed()
    .setTitle(':white_check_mark: Success!')
    .setDescription("Bot Successfully restarted!")
    .setColor("#7CFC00")

    let errorembed = new Discord.RichEmbed()
    .setTitle(`⚠ Whoops...`)
    .setDescription('You can not execute that command!')
    .setColor("#ff573a")

    let turningoffembed = new Discord.RichEmbed()
    .setTitle(':white_check_mark: Success!')
    .setDescription("Bot Turning off...")
    .setColor("#7CFC00")

    
    
if(message.author.id === "176246723524558850", "344010742166585344"){
    if(args[0]){
        switch(args[0]){
            case "off":
                message.channel.send(turningoffembed).then(client.destroy())
            break;
            case "restart":
            message.delete()
            client.destroy().then(client.login(settings.token)).then(console.log('Bot is being restarted by' + message.author)).then(message.channel.send(embedd));
            break;
        
        }
     } else {
        message.channel.send({embed: {
            color: 15158332,
            title: "⚠ Whoops...",
            description: `Please provide an argument.`
        }}).then(msg =>{
            msg.delete(3500)
        });
    }
} else {
    message.channel.send(errorembed)
}
};