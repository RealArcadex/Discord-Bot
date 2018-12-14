const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {


    
    let sayMessage = new Discord.RichEmbed()
    .setTitle(args.join(" "))
    .setColor('#4e42f4')

    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  
}