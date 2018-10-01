const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {
    


    
    message.channel.createInvite()
    .then(invite => 
        message.channel.send(`**New Invite**\n\nhttps://discord.gg/${invite.code}`)
    );
    
}