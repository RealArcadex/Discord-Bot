const fs = require('fs')
module.exports = client => {
    console.log(`Connected to Discord as ${client.user.tag}.\n--= Stats =--\n\nServers: ${client.guilds.size}`);
    client.user.setPresence({ 
        game: { 
            name: 'Jynx | -help'
        },
        status: 'watching'
    }).catch(console.error);
}