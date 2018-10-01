const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = function(client, message, args) {
    let outcomes = [
       "You're so ugly, you scared the crap out of the toilet.",
       "No I'm not insulting you, I'm describing you.",
       "It's better to let someone think you are an Idiot than to open your mouth and prove it.",
       "Your birth certificate is an apology letter from the condom factory.",
       "I’m jealous of people that don’t know you!",
       "You're so fake, Barbie is jealous.",
       "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
       "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
       "You must have been born on a highway because that's where most accidents happen.",
       "You, sir, are an oxygen thief!",
       "Why don't you go play in traffic.",
       "The last time I saw something like you, I flushed it.",
       "You have Diarrhea of the mouth; constipation of the ideas.",
       "Why don't you slip into something more comfortable... like a coma.",
       "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face",
       "Your house is so dirty you have to wipe your feet before you go outside.",
       "All day I thought of you... I was at the zoo.",
       "You're so dumb that you got hit by a parked car.",
       "Wipe your mouth, there's still a tiny bit of bullshit around your lips.",
       "Don't you have a terribly empty feeling - in your skull?",
       "Are you always this stupid or is today a special occasion?",
       "You are so old, your birth-certificate expired.",
       "If you really spoke your mind, you'd be speechless.",
       "You're so fat, you leave footprints in concrete.",
       "You're so fat that the only letter's of the alphabet you know are 'KFC'",
       "So, a thought crossed your mind? Must have been a long and lonely journey.",
       "How did you get here? Did someone leave your cage open?"
    ]


    
    let _outcomes = Math.floor(Math.random()*outcomes.length);
    let outcome = outcomes[_outcomes]

    message.channel.send(`${outcome}`)





}