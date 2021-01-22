const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');//discord Abdullah#7100


module.exports = {
  info: {
    name: "afk",
    description: "24/7",//discord Abdullah#7100
    usage: "[afk]",
    aliases: ["24/7"],
  },

  run: async function (client, message, args) {
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {//discord Abdullah#7100
        afk: false,
    };
    var serverQueue = afk[message.guild.id]
       if (serverQueue) {
            serverQueue.afk = !serverQueue.afk;
             message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `💤  **|**  AFK is **\`${serverQueue.afk === true ? "açık" : "kapalı"}\`**`//discord Abdullah#7100
                }
            });
            return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
    });
        };
    return sendError("There is nothing playing in this server.", message.channel);//discord Abdullah#7100
  },
};
