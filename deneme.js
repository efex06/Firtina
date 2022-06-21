const Discord = require("discord.js");
exports.run = async (client, message, args) => {

var page = 0;

let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription('**Fırtına Bot Ban Sistemi**\n**Bu kişiyi gerçekten banlamak istiyor musun?.**').setImage('https://i.imgur.com/NfH6Qmu.gif').setColor("BLUE")).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "✅":
            reaction.users.remove(user).catch(console.error);
            let embed = new Discord.MessageEmbed()
            message.channel.send(embed)
            embed.setDescription('**Fırtına Bot**\n**Komutları görmek için aşağıdaki emojileri kullanabilirsiniz.**\n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n**Moderasyon: 🌐**\n**Yetkili: ⚒**\n**Eğlence: 💚**')
            embed.setColor("BLUE");
           break;
          case "❌":
            reaction.users.remove(user).catch(console.error);
            --page

              embd.setColor("BLUE");
              embd.setDescription("**Moderasyon Komutları**")
            msg.edit(embd)
           break;
        }
      });
    })
}
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: "deneme",
        description: "Sayfalı Yardım Menüsü -ArdaDemr",
        usage: "Sayfalı Yardım Menüsü"
      };