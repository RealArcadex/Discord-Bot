const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    switch(args[0]){

        case "1":
            //
            let owners1 = new Discord.RichEmbed()
            .setTitle(`xaii#9066 & Arcadex#1258`)
            .setColor("00ff00")
            .setDescription("If you have any problems with the bot, feel free to contact XAII or Arcadex!")
            .setAuthor("Bot Owners:")
            .setThumbnail(message.author.avatarURL);

            message.channel.send(owners1);
            //
        break;
        case "2":
            //
            let owners2 = new Discord.RichEmbed()
           .setAuthor('Website Developers:')
           .setColor("00ff00")
           .setTitle('{website developers here, thats if we get any!}')
           .setDescription('Bot Website:')
           

            message.channel.send(owners2);
            //
        break;
        default:
            let aError = new Discord.RichEmbed()
            .setTitle(`⚠ Whoops...`)
            .setDescription('You need to choose a page out of ``1`` or ``2``')
            .setColor("#ff573a")

            message.channel.send(aError)
        break;
    }

}