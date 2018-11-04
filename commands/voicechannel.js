const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {

let channel = message.member.voiceChannel;

if(message.author.id === "425438234185695243", "344010742166585344"){
    if(args[0]){
        switch(args[0]){
            case "join":
                channel.join()
            break;
            case "leave":
                channel.leave()
            break;
            default:
                message.reply('Either do `-zexplosive twitter` or `-zexplosive youtube`')
        }}};

    }

 
