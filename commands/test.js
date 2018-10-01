const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require('fs')
const date = Date.now()

exports.run = function(client, message, args) { 

    message.channel.send(date)

}