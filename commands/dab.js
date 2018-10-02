const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    let outcomes = [
        "#ff0000",
        "#ff7f00",
        "#fff000",
        "#15ff00",
        "#00ff77",
        "#00ff77.",
        "#0400ff",
        "#ae00ff",
        "#ff00dc",
        "#ff0054"
    
     ]
 
 
     
     let _outcomes = Math.floor(Math.random()*outcomes.length);
     let outcome = outcomes[_outcomes]









let dabbb = new Discord.RichEmbed()
.setTitle('<o/')
.setColor(`${outcome}`)


    
message.channel.send(dabbb);






}