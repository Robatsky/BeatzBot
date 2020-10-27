const router = require('express').Router();
const User = require('../database/schemas/User');
const { getBotGuilds } = require('../api/BotService');
const { getCommonGuilds } = require('../api/GuildService');

router.get('/guilds', async (req, res) => {
    const botGuilds = await getBotGuilds();
    const user = await User.findOne( { discordId: req.user.discordId });

    if( user ) {
        const userGuilds = user.get('guilds');
        const commonGuilds = getCommonGuilds(userGuilds, botGuilds);
        res.send(commonGuilds);
    }
});

module.exports = router;