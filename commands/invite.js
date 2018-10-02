const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message, args) => {
    


    
    
    
    
    message.channel.createInvite()
    .then(invite =>   message.channel.send({embed: {
        color: 	000111000,
        title: "✅ Success!",
        description: `Invite generated! http://discord.gg/${invite.code}`
    }}))
     

        

        
        
           

    
};



