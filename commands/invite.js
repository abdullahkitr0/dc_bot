const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "davet",
    description: "Botu sunucunuza eklemek / davet etmek için",
    usage: "[invite]",
    aliases: ["inv","invite","davet"],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle(`Davet ${client.user.username}`)
    .setDescription(`Beni sunucunuzda ister misiniz? Beni bugün davet edin! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
