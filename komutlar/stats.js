const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail("https://cdn.discordapp.com/attachments/777509193988046868/823607175624654858/roliiiizz.png")
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Botun Verileri:", 
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      `Bot Sahibi:`,
      `> Bot geliştiricisi: <@545651586559377410>`
    ) 
    .addField(
      "Sürümler:",
      `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}** \n > Botun sürümü: **v900**`
    ) 
    .addField(
      "Botun Gecikmeleri:",
      `> Bot pingi: **${
        client.ws.ping
      }** \n> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};