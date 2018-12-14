const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {


if(message.author.id === "176246723524558850", "344010742166585344"){
let sayMessage = args.join(" ");
  
message.delete().catch(O_o=>{}); 
  
message.channel.send(sayMessage);
}
else {
    message.reply('This command is for the Devs of Jynx only!')
}












}