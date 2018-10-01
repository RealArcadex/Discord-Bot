const fs = require('fs')
module.exports = guild => {
        console.log(`Guild is being changed`)

    const guilds = require('../guilds/'+guild.id+'.json')
    guilds.guild.data.name = guild.name;
    fs.writeFileSync(`./guilds/${guild.id}.json`, JSON.stringify(guilds), function (err) {
        if (err) 
            return console.log(err);
        console.log(`Success! Guild settings were updated`);
    });

}