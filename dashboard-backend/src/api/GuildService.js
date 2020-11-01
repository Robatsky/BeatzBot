const MANAGE_GUILD_PERMISSION = 0x20;

function markCommonGuilds( userGuilds, botGuilds ) {
    return userGuilds.map( guild => {
        const hasBeatzBot = botGuilds.find(botGuild => (botGuild.id === guild.id) && (guild.permissions & MANAGE_GUILD_PERMISSION === MANAGE_GUILD_PERMISSION));
        return {
            hasBeatzBot: hasBeatzBot,
            ...guild
        };
    });
}

module.exports = { markCommonGuilds }