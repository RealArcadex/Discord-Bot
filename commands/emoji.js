const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {
    let outcomes = [
       "😂",
       "😄",
       "😃",
       "😀",
       "😊",
       "😉",
       "😍",
       "😘",
       "😚",
       "😗",
       "😜",
       "😛",
       "😳",
       "👩",
       "🤖",
       "🤐",
       "😴",
       "😵",
       "😫",
       "😢",
       "👨",
       "👨",
       "🤤",
       "🤣",
       "🤒",
       "😟",
       "😑",
       "🤑",
       "😷",
       "🤧",
       "🤠",
       "🤕",
       "😖",
       "😡",
       "😱",
       "😓",
       "😶",
       "😯"


     
    ]


    
    let _outcomes = Math.floor(Math.random()*outcomes.length);
    let outcome = outcomes[_outcomes]

    message.channel.send(`${outcome}`)





}