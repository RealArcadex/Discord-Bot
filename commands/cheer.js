const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {








    let outcomes = [
    "Don't worry, if you're feeling down, you're not alone. Talk to someone about it. I promise, everything is going to be okay.",
    "I may not know you, but you mean something to me",
    "You may look weak on the outside, but inside, you are strong!",
    "Cheer up. Although life may not be easy now, in the end it's all worth it. Everything will get better in time. So SMILE!",
    "No matter what, someone cares about you. Even if you think they don't. They do."
]


let _outcomes = Math.floor(Math.random()*outcomes.length);
let outcome = outcomes[_outcomes]

message.channel.send(`${outcome}`)



}