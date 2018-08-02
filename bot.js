const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'sa') {
    	message.reply('**Aleykum Selam Bilader**');
   }
    if (message.content === '!temizle') {
    	message.Delete()  
        message.channel.sendMessage('**Hizmet YOK**')
     }
     if (message.content === '!kurabiye') {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
     }
      if (message.content === '!botudöv') {
        message.channel.sendMessage('**Al işte, beğendin mi yaptığını? Ağlattın Beni!** :cold_sweat: :cold_sweat: :cold_sweat: :cold_sweat:')
     }
      if (message.content === '!köpek') {
        message.channel.sendMessage('**:dog: :dog:  Hav Hav Hav Hav :dog: :dog:**')
     }
      if (message.content === '!kedi') {
        message.channel.sendMessage('**:cat: :cat:   Miyav Miyav Miyav :cat: :cat: **')
     }
      if (message.content === '!afk') {
        message.reply(':zipper_mouth: :zipper_mouth: ** ARTIK AFK , SİZİ DUYMAZ ** :zipper_mouth: :zipper_mouth:  ')
     }  
      if (message.content === 'amk') {
          message.delete();
          message.reply(':rage: :rage:  ** Küfür Etmemelisin** :rage: :rage:  ')
     }
       if (message.content === '!swaç') {
           message.reply('**Hizmet YOK**')
    
     }
    if (message.content ==="sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)       
    }
    if (message.content ==="davet") {
        const embed = new Discord.RichEmbed()

            .addField("Davet Linki", "Destek Sunucusu" , true)

            .addField("https://goo.gl/C7ZDZv", "https://discord.gg/6mp4C2A" , true)
       
            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }
     if (message.content ==="botbilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", "@Hamza Eser#6628" , true)

            .addField("Version", "2.0" , true)
        
            .addField("Kullanılan RAM", "80,52MB" , true)
       
            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }
     if (message.content ==="yardım") {
        const embed = new Discord.RichEmbed()

            .addField("1", "Eglence" , true)

            .addField("2", "Admin Komutları" , true)
        
            .addField("3", "Kullanıcı Komutları" , true)
        
            .setFooter("**Flora-Bot**  Kullanımı --> !Yardım [Sayı]  ")

            .setColor(0xff0000)
        
        return message.channel.sendEmbed(embed)
    }
      if (message.content ==="yardım 1") {
        const embed = new Discord.RichEmbed()

            .addField("!kurabiye --> Size Kurabiye Verir")

            .addField("!botudöv -->  Botü Döver Ağlatırsınız")
        
            .addField("!köpek -->  Bot Köpeğe Dönüşür")
        
            .addField("!kedi -->  Bot Kediye Dönüşür")
        
            .addField("YENİ Eglence Komutları Ekleniyor")
        
            .setFooter("!yardım 1 [Eglence komutları]  ")

            .setColor(0xff0000)
        
        return message.channel.sendEmbed(embed)
    }
       if (message.content ==="!serverip") {
        const embed = new Discord.RichEmbed()

            .addField("Serverip", "Site" , true)

            .addField("FloraNetwork.batihost.com", " FloraNetwork.Bati.Host" , true)
       
            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }
       if (message.content ==="!site") {
        const embed = new Discord.RichEmbed()

            .addField("Site", "Serverip" , true)

            .addField("FloraNetwork.Bati.Host", " FloraNetwork.batihost.com" , true)
       
            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }
});

	.on("guildMemberAdd", async member => {
		const veri = client.provider.get(member.guild.id, "hosGeldinK", []);
		if (veri ==! true) return;
		if (veri === true) {
			const kanalveri = client.provider.get(member.guild.id, "hosGeldin", []);
			let username = member.user.username;
			if (member.guild.channels.get(kanalveri) === undefined || member.guild.channels.get(kanalveri) === null) return;
			if (member.guild.channels.get(kanalveri).type === "text") {
     const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(memberavatar)
     .addField('\:bust_in_silhouette: / İsmi: ', `${member}`)
     .addField('\ 📤 / Hoşgeldin', `${member}`)
     .addField('\:white_check_mark: / Bu Hesap Güvenli Gözüküyor', `► Oyuncu ◄`)
     .setFooter(`Flora-Bot`)
     .setTimestamp()
  
     channel.sendEmbed(embed);
  
  
    var role = member.guild.roles.find('name', '► Oyuncu ◄');
  
    member.addRole(role)    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
