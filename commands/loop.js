const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "tekrarla",
    description: "Müzik döngüsünü aç / kapat",
    usage: "loop",
    aliases: ["l","döngü","loop","tekrar","tekrarla"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Döngü **\`${serverQueue.loop === true ? "açık" : "kapalı"}\`**`
                }
            });
        };
    return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
  },
};
