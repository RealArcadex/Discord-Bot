const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {
    let outcomes = [
        'No way!',
        'YES YES YES!',
        'Dont Count on it!',
        'Maybe...',
        'Please ask again!'

    ];


    
    let _outcomes = Math.floor(Math.random()*outcomes.length);
    let outcome = outcomes[_outcomes]

    message.channel.send(`:8ball: | ${outcome}`)

}