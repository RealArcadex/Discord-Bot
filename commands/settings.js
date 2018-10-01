exports.run = function(client, message, args) {
    const fs = require('fs');
    const guild = message.guild.id;
    const currentGuild = require(`../guilds/${guild}.json`)
    const prefix = currentGuild.guild.settings.prefix;

    ('User ran settings with arguments: ' +args)
    if(args[0]){
        (args[0])
        switch(args[0]){
            case "edit":

                switch(args[1]){
                    case "prefix":
                        if(args[2]){
                            EditPrefix(args[2])
                        } else {
                            message.reply('Please enter a new prefix.')
                        }
                    break;
                    case "role":
                        
                        switch(args[2]){
                            case "mod":
                                if(args[3]){
                                    ModRole(args[3])
                                } else {
                                    message.reply('Please @mention a role.')
                                }
                            break;
                            case "admin":
                                if(args[3]){
                                    AdminRole(args[3])
                                } else {
                                    message.reply('Please @mention a role.')
                                }
                            break;
                        }

                    break;
                    default:
                        message.reply('`'+args[1]+'` is not a valid property.');
                    break;
                }

            break;
            case "help":
                help();
            break;
            default:
                message.reply('`'+args[0]+'` is not a valid option.');
            break;
        }
    } else {
        help();
    }

    function EditPrefix(prefix){
        (`Editing prefix to ${prefix} for the guild: ${message.guild.name}`);
        thisGuild.guild.settings.prefix = prefix;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        message.channel.send({embed: {
            color: 3066993,
            title: "Success",
            description: `Prefix successfully changed to \`${prefix}\``
        }});
    }

    function ModRole(role){
        let f1 = role.substring(3);
        let f2 = f1.slice(0, -1)
        thisGuild.guild.roles.moderator = f2;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        message.channel.send({embed: {
            color: 3066993,
            title: "Success",
            description: `Moderator role successfully changed.`
        }});    }

    function AdminRole(role){
        let f1 = role.substring(3);
        let f2 = f1.slice(0, -1)
        thisGuild.guild.roles.admin = f2;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        message.channel.send({embed: {
            color: 3066993,
            title: "Success",
            description: `Administrator role successfully changed.`
        }});    }

            function help(){
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: 'Guild Settings',
                      icon_url: client.user.avatarURL
                    },
                    description: "Modify server-specific settings.",
                    fields: [{
                        name: "Change Bot Prefix",
                        value: `\`${prefix}settings edit prefix <newPrefix>\``
                      }
                    ]
                  }
                });
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: 'Role Settings',
                      icon_url: client.user.avatarURL
                    },
                    description: "Change role settings.",
                    fields: [{
                        name: "Change Moderator Role",
                        value: `\`${prefix}settings edit role mod @role\``
                      },
                      {
                        name: "Change Administrator Role",
                        value: `\`${prefix}settings edit role admin @role\``
                      }
                    ]
                  }
                });
            }
}