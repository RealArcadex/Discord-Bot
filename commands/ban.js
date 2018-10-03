const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) { 

    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) return message.channel.sendMessage({embed: {
             color: 16734010,
             title: "Error",
             description: `
             Please mention a user!
             `
         }}).then(msg =>{
             msg.delete(3500)
         });

    let banReason = args.join(" ").slice(22);
    if(!banReason) return message.channel.sendMessage({embed: {
        color: 16734010,
        title: "Error",
        description: `
        Please specify a reason!
        `
    }}).then(msg =>{
        msg.delete(3500)
    });

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage({embed: {
        color: 16734010,
        title: "Error",
        description: `
        You need the ``BAN_MEMBERS`` permission to use this command!
        `
    }}).then(msg =>{
        msg.delete(3500)
    });

    if(banUser.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage({embed: {
        color: 16734010,
        title: "Error",
        description: `
        This user can not be banned!
        `
    }}).then(msg =>{
        msg.delete(3500)
    });
    
    message.guild.ban(banUser)

    let banEmbeds = new Discord.RichEmbed()
    .setTitle("User Banned")
    .setColor("#ff573a")
    .addField("Banned User", `${banUser}`)
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Reason", `${banReason}`);

    message.channel.send(banEmbeds)
    
    //let logchannel = message.guild.channels.find()
    //if(!logchannel) return message.channel.send()                   Logs for guild preferences (add in future)
    //logchannel.send(banEmbeds);

    }