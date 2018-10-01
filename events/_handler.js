const event = (event) => require(`./${event}`);
module.exports = client => {
    client.on('ready', () => event('ready')(client));
    client.on('message', event('message'));
    client.on('guildCreate', event('join'));
    client.on('guildUpdate', event('guildUpdate'));
};