// https://discordapp.com/oauth2/authorize?client_id=490101136171335701&scope=bot&permissions=2146958839.


const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = '-';
require('./events/_handler')(client);

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.includes('..') || message.content.includes('.') || message.content.includes('/')) return;

    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);

    }   catch (e) {
        message.channel.send("This command does not exist!")
        message.delete()
        .then (message =>{
            message.delete(3500)
        })
        console.log(e.stack);
    }

});

client.login(settings.token);
