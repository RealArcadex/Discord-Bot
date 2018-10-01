const fs = require('fs')
module.exports = client => {
    console.log(`Connected to Discord as ${client.user.tag}.\n--= Stats =--\n\nServers: ${client.guilds.size}`);
    client.user.setPresence({ 
        game: { 
            name: 'Jynx | ' + client.guilds.size + ' Severs'
        },
        status: 'online'
    }).catch(console.error);
}