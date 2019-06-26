var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome in servr Anis ${client.user.tag}!`);
});
var prefix = '#'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "484326398568300555") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { //Anis_hdd - [ ANIS_Malumuat]
    let pages = [`
***__وصف عن البوت__***
**
 -🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية
¤ ✺☵⚌⚌⚌⚌⚌☵⚀ANIS_HDD⚀☵⚌⚌⚌⚌⚌☵✺¤
**
     ▛═════════『ِ «Anis_hdd» 』ِ═════════▜
        ***__General orders__***
**
✴#id > 『عرض ملفك الشخصي』
✴#server > 『معلومات عن السيرفر』
✴#ping>لمعرفه سرعه البوت』
✴#bot> معلومات عن البوت』
✴#avatar> يعرض صورتك او صوره شخص』
✴#support>سيرفر الدعم القني و المساعده』
✴#calculate > حاسبة』
✴#say>يكرر الكلام الي تكتبو
✴#skin >name in minecraft لإضهار سكنك في ماين طرافت 
✴#roles>يعرض لك كل الرانكات بالسيرفر بشكل جميل
✴#members >معلومات عن الاعضاء
✴${prefix}pic >يكتب اي اسم في صورة
✴${prefix}buy>لشراء رتبة هلبر اكتب 
✴${prefix}report >للإبلاغ عن شيئ
✴${prefix}topinv > لعرض صاحب اكثر دعوات
✴${prefix}tag > لعرض الكلام بشكل جميل و كبير 
✴${prefix}rules > يعرض لك قوانين السيرفر


**
  `
,`
        ***__Admin orders__***
**
✴#ban > 『لتعطي شخص باند』
✴#kick > 『لتعطي شخص كيك』
✴#clear > 『لمسح الشات برقم』
✴#createroles > 『عمل رتب متكاملة للسيرفر』
✴#voicesetup > 『انشاء روم فويس اونلاين
لكتابة الكلام الذي في الروم اكتب voicesetup الكلام و 0 』
✴#color >50 /انشاء 50 لون』
✴#mute < mention > > اسكات عضو
✴#unmute <mention> > فك الاسكات من العضو
✴#bc >『خيارات البرودكاست』
✴#ce >لمح لشات بعدد
✴#role @user <rank> > لأعطاء رتبة لعضو معين
✴#roleremove @user <rank> >لازالة الرتبة من شخص معين
✴${prefix}hchannel > اخفاء الشات
✴${prefix}schannel > اضهار الشات المخفية
✴${prefix}ct >لعمل روم كتابي
✴${prefix}cv >وم كتابي صوتي
----------------------
✴#guilds : عدد سيرفر البوت
✴#inv : دعوه البوت الى سيرفر 
✴#help : عرض هذه الرسالة
**
  `
,`
        ***__Games orders__***
**
✴#يخيرك بين شي وشي / لو خيروك』
✴#لعبه صراحه/صراحه』
✴#xo لعبة اكس او
✴#يعطيك عقابات لازم تسويها : عقاب 
✴#ask : 『البوت يسئلك اسئلة』
✴#فكك

 [welcome]يتم الترحيب عبر روم اسمه
**
  ═════════『ِAnis_hdd』ِ═════════
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('⏮').then( r => {
            msg.react('⏭')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});
 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
	  message.react("📩")
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكا
