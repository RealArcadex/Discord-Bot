const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require('fs')
const date = Date.now()

exports.run = function(client, message, args) { 

    let rInteger = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32'

    ];

    let _rInteger = Math.floor(Math.random()*rInteger.length);
    let rNumber = rInteger[_rInteger]*3+5*6-9

    let guildRNumber = message.guild.id/2

    if(args[0]){
        let str = args.slice(0).join(' ');
        message.delete();
        
        fs.writeFile(`./suggestions/${guildRNumber}${rNumber}.txt`, `[${message.guild.name}] ${message.author.username}#${message.author.discriminator}: ${str}`, { flag: 'w' }, function (err) {
            if (err) 
                return;
        });

        let success = new Discord.RichEmbed()
        .setTitle("Success!")
        .setColor("#80ed71")
        .setDescription("Your suggestion has been sent!");

        message.author.send(success)

    } else {
        let fail = new Discord.RichEmbed()
        .setTitle("Oops...")
        .setColor("#ff573a")
        .setDescription("An error occured! Was it because you didn't write any text?")
        message.channel.send(fail)
    }

}