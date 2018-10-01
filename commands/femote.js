const Discord = require("discord.js")
const client = new Discord.Client();

    exports.run = function(client, message, args) {
        let outcomes = [
            "https://tenor.com/view/thanos-fortnite-takethel-dance-gif-12100688",
            "https://tenor.com/view/thanos-dancing-fortnite-orange-gif-11793362",
            "https://tenor.com/view/trump-donald-trump-fortnite-dance-shoot-dance-gif-12453531",
            "https://tenor.com/view/fortnite-running-man-dance-dancing-gif-11228590",
            "https://tenor.com/view/fortnite-bear-dancing-dance-shuffle-gif-11159958",
            "https://tenor.com/view/fortnite-dance-dancing-gif-11998490",
            "https://tenor.com/view/popcorn-fortnite-excited-intrigued-interested-gif-11830054",
            "https://tenor.com/view/tidy-thanos-snoop-fortnite-dance-gif-12099487",
            "https://tenor.com/view/fortnite-best-friends-mates-bestmates-gif-11760178",
            "https://tenor.com/view/thanos-dancing-dance-fortnite-thanos-orange-justice-gif-11842345"
    
        ];
    
    
        
        let _outcomes = Math.floor(Math.random()*outcomes.length);
        let outcome = outcomes[_outcomes]
    
        message.channel.send(`${outcome}`)
    
    










}