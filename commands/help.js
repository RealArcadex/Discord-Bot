const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    switch(args[0]){

        case "1":
            //
            let help1 = new Discord.RichEmbed()
            .setTitle(`🔰 Help Page 1`)
            .setColor("00ff00")
            .addField("``-report [user] [reason]``", "Report a user with a reason", true)
            .addField("``-say [message]``", "Sends a message from the bot")
            .addField("``-kick [user] [reason]``", "Kicks the specified user from the server")
            .addField("``-ban [user] [reason]``", "Bans the specified user from the server")
            .setThumbnail(message.author.avatarURL)

            message.channel.send(help1);
            //
        break;
        case "2":
            //
            let help2 = new Discord.RichEmbed()
            .setTitle(`🔰 Help Page 2`)
            .setColor("00ff00")
            .addField("``-purge [2-100]``", "Delete the previous number of messages specified", true)
            .addField("``-cheer``", "Gives a quote to cheer you up a little.")
            .addField("``-dab``", "Sends a `<o/` to make your friends think you are really cringe.")
            .addField("``-owners [1-2]``", "Show's the developer's of the bot.")
            .addField("``-discord``", "Send's the link to the bot's discord:")
            message.channel.send(help2);
            //
        break;
        case "3":
            //
            let help3 = new Discord.RichEmbed()
            .setTitle(`🔰 Help Page 3`)
            .setColor("00ff00")
            .addField("``-dab``", "Sends a `<o/` to make your friends think you are really cringe.", true)
            .addField("``-femote``", "Sends a gif of a random fortnite emote.")
            .addField("``-roast``", "Simply roast's you hard.")
            message.channel.send(help3);
            //
        break;
        default:
            let tError = new Discord.RichEmbed()
            .setTitle(`⚠ Whoops...`)
            .setDescription('You need to choose a page out of ``1``, ``2`` or ``3``!')
            .setColor("#ff573a")

            message.channel.send(tError)
        break;
    }

}