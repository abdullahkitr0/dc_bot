const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "Sunucu şarkı sırası ses seviyesini değiştirmek için",
    usage: "[volume]",
    aliases: ["v", "vol","ses","volume"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("Üzgünüm ama müzik çalmak için bir ses kanalında olmanız gerekiyor!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
    if (!args[0])return message.channel.send(`Mevcut Ses: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Numbers only!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Sesi 150den fazla veya 0ın altına ayarlayamazsının',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`Sesi ayarladım: **${args[0]/1}/100**`)
    .setAuthor("Server Volume Manager", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("BLUE")
    return message.channel.send(xd);
  },
};
