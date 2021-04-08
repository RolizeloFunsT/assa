const chalk = require('chalk');
const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `Prince`,
            type: 'listening'
        },
        status: 'online'
    })
    console.log(`[${client.user.username}]: Giriş Yaptı! Komutlar Yüklendi! Only Code By Except!`);
}