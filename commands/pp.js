const Discord = require("discord.js")
const client = new Discord.Client();



exports.run = (client, message, args) => {

let tError = new Discord.RichEmbed()
.setTitle(":warning: Error!")
.setDescription("Please enter a valid username!")




    let outcomes = [
        "`8=D` 1cm",
        "`8==D` 2cm",
        "`8===D` 3cm",
        "`8====D` 4cm",
        "`8=====D` 5cm",
        "`8======D` 6cm",
        "`8=======D` 7cm",
        "`8========D` 8cm",
        "`8=========D` 9cm",
        "`8===========D` 10cm",
    ]

    let _outcomes = Math.floor(Math.random()*outcomes.length);
    let outcome = outcomes[_outcomes] 

    if(message.content.includes('penis', "pp")){
        message.reply('boi')
    } else {
    if (message.channel.nsfw === false) {
        return message.reply(":warning: This channel isn't marked as NSFW.");
      } else {
        message.channel.send(args[0] +  ` your pp length is ${outcome}`) 
      }};
    
    
    
   















}