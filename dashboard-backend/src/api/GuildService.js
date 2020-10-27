const MANAGE_GUILD_PERMISSION = 0x20;

function getCommonGuilds( userGuilds, botGuilds ) {
    return userGuilds.filter( guild => botGuilds.find(botGuild => (botGuild.id === guild.id) && (guild.permissions & MANAGE_GUILD_PERMISSION === MANAGE_GUILD_PERMISSION)));
}

module.exports = { getCommonGuilds }