require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
const GuildConfig = require('./database/schemas/GuildConfig');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beatzbot',  { useNewUrlParser: true, useUnifiedTopology: true});

client.on('guildCreate', async guild => {
    try {
        const guildConfig = await GuildConfig.create( {
            guildId: guild.id 
         });
         console.log("Bot has joined the Server. Saved to DB");
    } catch (err) {
        console.log(err);
    }
});

client.on('message', async (message) => {
    if(message.author.bot) return;

    const guildConfig = await GuildConfig.findOne({guildId: message.guild.id});
    const prefix = guildConfig.get('prefix');

    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`Echo: [${message.content}]`);
});

client.login(process.env.BOT_TOKEN);