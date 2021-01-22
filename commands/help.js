const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "yardım",
        description: "Tüm komutları gösterir.",
        usage: "[command]",
        aliases: ["commands","help me","pls help","help","yardım"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username, "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
        .setColor("BLUE")
        .setDescription(allcmds)
        .setFooter(`Yapabileceğiniz her komut hakkında bilgi almak için ${client.config.prefix}help [command] | Maked by Abdullah#7100`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Adı: ${command.info.name}
Açıklaması: ${command.info.description}
Kullanımı: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Takma adları: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
