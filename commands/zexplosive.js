const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {



    message.delete();


    
    let twitterr = new Discord.RichEmbed()
    .setTitle("zExplosive's Twitter!")
    .setURL("http://www.twitter.com/IanBone5")
    .setColor("#89c4fa")
    




    let youtubee = new Discord.RichEmbed()
    .setTitle("zExplosive's Youtube!")
    .setURL("http://www.youtube.com/c/ArcadeIPB")
    .setColor("#ff0000")
    





    if(message.author.id === "425438234185695243", "344010742166585344"){
        if(args[0]){
            switch(args[0]){
                case "twitter":
                    message.channel.send(twitterr);
            
                break;
                case "youtube":
                    message.channel.send(youtubee);
                break;
                case "subs":
                message.reply("zExplosive's Subs!", {
                    file: "https://i.imgur.com/AFF981v.png"
                });
                break;
                default:
                    message.reply('Either do `-zexplosive twitter` or `-zexplosive youtube` OR `-zexplosive subs`')
            }}}};