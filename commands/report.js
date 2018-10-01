const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {

    let noReasonDefine = new Discord.RichEmbed()
    .setTitle("⚠ Whoops!")
    .setDescription("You must specify a reason!")
    .setColor("#ff573a")

    let noUserMention = new Discord.RichEmbed()
    .setTitle("⚠ Whoops!")
    .setDescription("You must mention a user!")
    .setColor("#ff573a")

    let noReportsChannel = new Discord.RichEmbed()
    .setTitle("⚠ Whoops!")
    .setDescription("The report has not been sent because there is no reports channel.")
    .setColor("#ff573a")

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send(noUserMention)
    let reason = args.join(" ").slice(22);
    if (!reason) return message.channel.send(noReasonDefine)

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff573a")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("Reason", `${reason}`)
    .setTimestamp();

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send(noReportsChannel);

    message.delete().catch(O_o=>{});
    message.author.sendMessage(reportEmbed)
    reportschannel.send(reportEmbed)
    message.channel.send(`**${rUser} HAS BEEN REPORTED!**`);

    return;
}