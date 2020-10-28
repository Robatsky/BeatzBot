const router = require('express').Router();
const User = require('../database/schemas/User');
const Guild = require('../database/schemas/GuildConfig');

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

router.put('/guilds/:guildId/prefix', async (req, res) => {
    const { prefix } = req.body;
    const { guildId } = req.params;

    if(!prefix) return res.status(400).send({msg: 'Prefix is required'});

    const guild = await Guild.findOneAndUpdate( { guildId: guildId }, { prefix });

    if(!guild) {
        return res.status(400).send( {msg: `No guild found for the id ${guildId}`});
    } 
    return res.status(200).send( { msg: `Prefix has been updated successfully.` });
});

module.exports = router;