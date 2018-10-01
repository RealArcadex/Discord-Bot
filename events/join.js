const fs = require('fs')
module.exports = guild => {
        console.log("Someone added me to: " + guild.name + " and their name was: " + guild.owner.user.username)


    fs.writeFileSync(`./guilds/${guild.id}.json`, `
    {  
        "guild":{  
           "data":{  
              "name":"${guild.name}",
              "owner":"${guild.owner.user.username}"
           },
           "settings":{  
              "prefix":"-"
           },
           "roles":{  
              "moderator":"",
              "admin":""
           }
        }
     }
    `, { flag: 'w' }, function (err) {

        if (err) 
            return console.log(err);
        console.log(`Success! Guild settings file has been created!`);
    });
}