const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) { 
    let outcomes = [
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***",
     "***rock***",
     "***paper***",
     "***sissors***"
     ]
 
 
     
     let _outcomes = Math.floor(Math.random()*outcomes.length);
     let outcome = outcomes[_outcomes]
 
     
     let errorembed = new Discord.RichEmbed()
    .setTitle(`⚠ Whoops...`)
    .setDescription('Please do ``-rps rock/paper/sissors')
    .setColor("#ff573a")




    if(args[0]){
        switch(args[0]){
            case "rock":
                    message.channel.send("You chose ***" + args[0] + `*** I chose ${outcome}`);


                    //
            break;
                    //
            case "paper":
                    //
            message.channel.send("You chose ***" + args[0] + `*** I chose ${outcome}`);
            break;
                    //
            case "sissors":
            message.channel.send("You chose ***" + args[0] + `*** I chose ${outcome}`);   
            break;
        }
    
    } else {
        message.channel.send({embed: {
            color: 15158332,
            title: "⚠ Whoops...",
            description: 'Please do ``-rps rock/paper/sissors``'
        }}).then(msg =>{
            msg.delete(3500)
        });
    }














}