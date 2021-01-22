module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  console.log(`${client.user.username}: Şu an ` + client.guilds.cache.size + ` adet sunucuya ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} adet kullanıcıya ve ${client.channels.cache.size} adet kanala hizmet veriliyor!`);
  await client.user.setActivity("!yardım", { //Oynuyor Kısmı
 
    type: "WATCHING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};