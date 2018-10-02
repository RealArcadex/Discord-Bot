const Discord = require("discord.js")
const client = new Discord.Client();


exports.run = function(client, message, args) {
    message.delete();
    let str = args.slice(1).join(' ');

    if(message.author.id === "176246723524558850", "344010742166585344"){
        if(args[0]){
            switch(args[0]){
                case "leave":
                    if(message.guild.id === "492948608140967937"){
                        message.reply('I cannot leave the main Jynx server!').then(msg => {
                            msg.delete(3500);
                        })
                        return;
                    }
                    message.guild.leave();
                break;
                case "servers":
                    message.channel.send(client.guilds.size+' guilds.')
                break;
                default:
                    message.reply('please provide a valid argument.')
                break;
            }
        
        } else {
            message.channel.send({embed: {
                color: 15158332,
                title: "Error",
                description: `⚠ Please provide an argument.`
            }}).then(msg =>{
                msg.delete(3500)
            });
        }
    } else {
        message.channel.send("You have no permission!")
    }
};