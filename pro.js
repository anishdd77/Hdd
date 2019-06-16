const Discord = require('discord.js');
const client = new Discord.Client();
var prefix=`!`
const moment = require('moment');
const fs = require('fs');
var version = '11.0.0';
var owner = '333239187509870595'
const Bot = new Discord.Client();

let daily = JSON.parse(fs.readFileSync("./daily.json", "utf8")); // يقرا ملف jso
let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));

const sql = require("sqlite");
sql.open("./score.sqlite");

client.on("message", message => {
if(!daily[message.author.id]) {
    daily[message.author.id] = {
        getDaily: false,
        dayClaimed: ''
    }
}
let conf = daily[message.author.id];

  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 2, 0]);
    } else {
      let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);

        var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/up1.png','./img/up2.png','./img/up.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(88, 110),
            Ui = canvas.getContext('2d');
        Ui.patternQuality = 'bilinear';
        Ui.filter = 'bilinear';
        Ui.antialias = 'subpixel';
        Ui.shadowColor = 'rgba(0, 0, 0, 0.4)';
        Ui.shadowOffsetY = 2;
        Ui.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new BG;
            ground.src = Background;
            Ui.drawImage(ground, 0, 0, 88, 110); // 0, 0, 207, 176

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".gif" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        let Avatar = Canvas.Image;
                    /*    Ui.arc(80,80,50,0,2*Math.PI);
                        Ui.clip();*/
                        let ava = new Avatar;
                        ava.src = buf;
                        Ui.drawImage(ava, 19, 3, 52, 50);
                        Ui.font = 'bold 30px Helvetica';
                        Ui.fontSize = '30px';
                        Ui.fillStyle = "#c4bdbd";
                        Ui.textAlign = "center";
                        Ui.fillText(`${row.level}`, 45, 105);
                    message.channel.send(`:up: ** |  ${message.author.username}    Level Up! To ${row.level} ** `, {file: canvas.toBuffer()});
                  });
         });
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 1]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "لفل")) {
   if(!message.channel.guild) return;
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
             const embed32 = new Discord.RichEmbed()
  .setAuthor(` `,client.user.avatarURL)
  .setColor("GRAY")
  .setAuthor(message.user.displayAvatarURL)

  .addField("**Level:**",`${row.level}`,true)
  .setFooter(`${prefix}ترتيبك || `)
  message.reply("Your Level");
 message.channel.sendEmbed(embed32);
 console.log('[level] Send By: ' + message.author.username)
    });
  }

  if (message.content.startsWith(prefix + "هدية")) {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
             sql.run(`UPDATE scores SET points = ${row.points + 500} WHERE userId = ${message.author.id}`);
              if(conf.getDaily == false) {
                  row.points + '500';
            message.channel.send(` **:ballot_box_with_check:  |  ${message.author.username} , You Have Add ${'`500$`'} to your account :credit_card:  **`)
                  conf.getDaily = true;
                  const d = new Date();
                 const day = d.getDate()
                  conf.dayClaimed = day;
              } else {
                  sql.run(`UPDATE scores SET points = ${row.points + 0} WHERE userId = ${message.author.id}`);
                  message.channel.send(` **⏰ |  ${message.author.username} , To get Agin come back  ${moment().endOf('day').fromNow()}**`);
              }

              const d = new Date();
              const day = d.getDate();

              if(conf.dayClaimed + 1) {
                  conf.getDaily = true;
              }

              // نجرب ض1؟
                    message.react("💳")

    });
  }

  if(message.content.startsWith(prefix+'تشفير')){
     //  if(!message.channel.guild) return message.reply('** This command only for servers**');
      const hex = require('hex.js');
      const args = message.content.split(' ').slice(1).join(' ');
      message.channel.send('تم التشفير: '+hex.hex(args));
  }

  if(message.content.startsWith(prefix+'فك')){
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      const hex = require('hex.js');
      const args = message.content.split(' ').slice(1).join(' ');

      message.channel.send('تم فك التشفير: '+hex.unHex(args));

  }



    if (message.content.startsWith(prefix + "فلوس")) {
       if(!message.channel.guild) return;
      var ment = message.mentions.members.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
      sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
        message.channel.send(getvalueof.toString()+',** your :credit_card: balance is '+'`$'+`${row.points}`+'`**');
        console.log('[credit] Send By: ' + message.author.username)
      });
    }
    fs.writeFile("./daily.json", JSON.stringify(daily), (err) => {
    if (err) console.error(err)
  });
  });





client.pointsMonitor = (dateformat, message) => {
  if (message.channel.type !=='text') return;
  const settings = client.settings.get(message.guild.id);
  if (message.content.startsWith(settings.prefix)) return;
  const score = client.points.get(message.author.id) || { points: 1, level: 1 };
  score.points++;
  const curLevel = Math.floor(0.2 * Math.sqrt(score.points));
  if (score.level < curLevel) {
        message.channel.send(`حظا جيدا <@!${message.author.id}> لقد وصـلت الـى لفل ${curLevel} `);
    score.level = curLevel;
  }
client.points.set(message.author.id, score);
};
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {

    userData.level = curLevel;
  //  message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }

 // if (message.content.startsWith(prefix + "level")) {
    //message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);

  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});
client.on("message",  message => {
    if(message.content.startsWith(prefix + 'ترتيبي')) {
         if(!message.channel.guild) return message.reply('** This command only for servers**');
     var ment = message.mentions.users.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
  let userData = points[message.author.id];
           var Canvas = require('canvas')
var jimp = require('jimp')
const snumber = require('short-number')
         sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
message.channel.startTyping(1)
const w = ['./img/rank.png'];
      let Image = Canvas.Image,
          canvas = new Canvas(360, 100),
          ctx = canvas.getContext('2d');
      ctx.patternQuality = 'bilinear';
      ctx.filter = 'bilinear';
      ctx.antialias = 'subpixel';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 360, 100);
});
              let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
              jimp.read(url, (err, ava) => {
                  if (err) return console.log(err);
                  ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                      if (err) return console.log(err);
                      let Avatar = Canvas.Image;
                      let ava = new Avatar;
                      ava.src = buf;
                      ctx.drawImage(ava, 8, 7, 86, 86);
                      if (!row) return message.reply("**Your Level Is 0 , Try .daily , Then Try This Command **");
                      ctx.font = '20px Cairo';
                      ctx.fontSize = '20px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.points), 263, 45);
                      ctx.font = '20px Cairo';
                      ctx.fontSize = '20px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.level), 135, 45);
                     ctx.font = '20px Cairo';//xp
                      ctx.fontSize = '28px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(userData.points, 330, 46);
                                              //Name
                        ctx.font = "20px Cairo";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(getvalueof.username, 240, 85);

                      message.channel.send(`**:pencil: |  Here is ${getvalueof.username}'s Rank Card**`,{file : canvas.toBuffer()});
message.channel.stopTyping(1)
                      });
                  });
                });


            console.log('rank is Using');
    }


 if(message.content.startsWith(prefix + 'العنوان')) {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
        var args = message.content.split(" ").join(" ").slice(8)
        if (!args) return;
        db.updateText(`message_${message.author.id}`, args).then(i =>{
            message.channel.send(`Profile Message Changed To ${i.text}`)
        })
    }

    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'لايك')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر ض1
            message.channel.send(`** :white_check_mark: | Successly Added To ${message.author} rep point ! **`)
        } else {
    const embed = new Discord.RichEmbed()
      .setTitle('خطأ!')
      .setColor('RED')
      .setDescription('**:alarm_clock: | لقد قمت بذالك بالفعل !, للإرسال مرة آخرى حاول ' + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
      message.channel.sendEmbed(embed);
        }
       }

    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

const db = require("quick.db");
let dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
client.on("message",  message => {
    let args = message.content.split(' ').slice(1);

var prefix =`!`;
  let command = message.content.split(" ")[0];
      if (command === prefix + "تعيين") {
        if(!args[0]) return message.reply('يجب عليك اختيار رقم الخلفيه')
        if(dataPro[message.author.id].walls[args[0]]) {
        dataPro[message.author.id].ai = true;
        dataPro[message.author.id].wallSrc = dataPro[message.author.id].walls[args[0]].src;
        message.reply('تم بنجاح تغير الخلفيه');
        } else {
            message.reply('انت لا تملك هذه الخلفيه')
        }
    }

    if(message.content.startsWith(prefix + 'خلفيات')) {
        var walls = dataPro[message.author.id].walls;
        for(var wall in walls) {
            console.log(walls[wall]);
            message.channel.send(walls[wall]);// ;(
        }
    }
    var wallpapers = {
                1: {
                    src: 'walls/1414.jpg',
                    price: 1,
                },
                2: {
                    src: 'walls/1515.jpg',
                    price: 2,
                },
                3: {
                    src: 'walls/7777.jpg',
                    price: 3,
                },
                4: {
                    src: 'walls/9999.jpg',
                    price: 4,
                },
                5: {
                    src: 'walls/44444.jpg',
                    price: 5,
                },
            }
    if(!dataPro[message.author.id]) {
            dataPro[message.author.id] = {
                ai: false,
                wallSrc: './walls/default.jpg' ,
                walls: {}
            }
        }
         var prefix=`!`
    if(message.content.startsWith(prefix + 'شراء')) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) return message.reply("** Pls Try .daily And Try Agin**");
        if (!row) return message.reply("sadly you do not have any points yet!");
        let points = row.points;
        if(!args[0]) {
            let embed = new Discord.RichEmbed()
.setDescription('**ورقم الخلفية .buy لـشراء خلفية آستخدم آمر  ** ')
.addField('Profile starwars','Price : $1000 Number: 1')
.addField('Profile Sun','Preice: $1800 Number: 2')
.addField('Profile Tree','Price : $2300 Number: 3')
.addField('Profile Mount','Price: $3000 Number: 4')
.addField('Profile Old Tree','Price: $4000 Number: 5')
 .setImage("");
            message.channel.send({embed: embed});
        } else {

            if(wallpapers[args[0]].price > row.points) {
                message.reply('لا يمكنك شراء هذه الخلفيه لانك لا تملك المال الكافي لشرائها ')
            } else {
                if(dataPro[message.author.id].walls == wallpapers[args[0]]) return message.reply('انت تملك هذه الخلفيه مسبقاً');
                else {
                    row.points - wallpapers[args[0]].price;
                    sql.run(`UPDATE scores SET points = ${row.points - wallpapers[args[0]].price} WHERE userId = ${message.author.id}`);
                     dataPro[message.author.id].ai = true;
                     dataPro[message.author.id].walls[args[0]] = wallpapers[args[0]];
                    message.reply('تم بنجاح شراء الخلفيه للاستخدام الخلفيه اكتب .set '+args[0]);
                }

            }

        }

        });
        //message.reply('Hhihihi');
    }

    fs.writeFile('./walls.json', JSON.stringify(dataPro), (err) => {
     if(err) console.log(err.message);
 })
    if(message.content.startsWith(prefix + 'بروفايل')) {
         if(!message.channel.guild) return message.reply('** This command only for servers**');
     var ment = message.mentions.users.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {

    userData.level = curLevel;
  //  message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }
           var Canvas = require('canvas')
var jimp = require('jimp')
const snumber = require('short-number')
         sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
message.channel.startTyping(1)
const w = ['./img/wall.png'];
      let Image = Canvas.Image,
          canvas = new Canvas(437, 437),
          ctx = canvas.getContext('2d');
      ctx.patternQuality = 'Cairo';
      ctx.filter = 'Cairo';
      ctx.antialias = 'Cairo';
      ctx.shadowColor = 'Cairo(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;



      fs.readFile(`${dataPro[getvalueof.id].wallSrc}`, function (err, Background) {
          fs.readFile(`${w[0]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 437, 437);
});
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 437, 437);
});



              let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
              jimp.read(url, (err, ava) => {
                  if (err) return console.log(err);
                  ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                      if (err) return console.log(err);
                      let Avatar = Canvas.Image;
                      let ava = new Avatar;
                      ava.src = buf;
                      ctx.drawImage(ava, 11, 47, 116, 116);
                      if (!row) return message.reply("**Your Level Is 0 , Try .daily , Then Try This Command **");
                      ctx.font = '25px Cairo';
                      ctx.fontSize = '55px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.level), 395, 75);
                      ctx.font = '25px Cairo';
                      ctx.fontSize = '95px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(`$${snumber(row.points)}`, 360, 428);
                                              //Name
                        ctx.font = "25px Cairo";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(getvalueof.username, 297, 140);
                      ctx.font = "17px Cairo";
                      ctx.fontSize = "12px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "left";
                      db.fetchObject(`message_${getvalueof.id}`).then(i => {

                          if (!i.text){
                              i.text = "Try .setinfo";
                          };
                      ctx.fillText(i.text, 140,264);
                   ctx.font = "25px  Cairo";
                      ctx.fontSize = "15px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText('Soon', 1790,1200);
                      // REP
                    ctx.font = "25px  Cairo";
                      ctx.fontSize = "100px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(`❤️: ${rep[message.author.id].repo}`, 220,343);
                     ctx.font = '25px Cairo';//xp
                      ctx.fontSize = '28px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(userData.points, 80, 428);
                      message.channel.send(`**:pencil: |  Here is ${getvalueof.username}'s Profile**`,{file : canvas.toBuffer()});
message.channel.stopTyping(1)
                      });
                  });
                });
         });

            console.log('ProFile is Using');
    }


      if(message.content == `${prefix}لفل-اب`) {

          try {
             sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 2, 0]);
    } else {
      let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);

        var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/up1.png','./img/up2.png','./img/up.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(88, 110),
            Ui = canvas.getContext('2d');
        Ui.patternQuality = 'bilinear';
        Ui.filter = 'bilinear';
        Ui.antialias = 'subpixel';
        Ui.shadowColor = 'rgba(0, 0, 0, 0.4)';
        Ui.shadowOffsetY = 2;
        Ui.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new BG;
            ground.src = Background;
            Ui.drawImage(ground, 0, 0, 88, 110); // 0, 0, 207, 176

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".gif" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        let Avatar = Canvas.Image;
                    /*    Ui.arc(80,80,50,0,2*Math.PI);
                        Ui.clip();*/
                        let ava = new Avatar;
                        ava.src = buf;
                        Ui.drawImage(ava, 19, 3, 52, 50);
                        Ui.font = 'bold 30px Helvetica';
                        Ui.fontSize = '30px';
                        Ui.fillStyle = "#c4bdbd";
                        Ui.textAlign = "center";
                        Ui.fillText(`${row.level}`, 45, 105);
                    message.channel.send(`:up: ** |  ${message.author.username}    Level Up! To ${row.level} ** `, {file: canvas.toBuffer()});
                  });
         });

      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 1]);
    });
  });

          } catch (e) {
              console.log(e.message);
          }
          }



    try{
    let args = message.content.split(' ').slice(1);
  if (message.content.startsWith(prefix + 'OWNER')) {
        if(!message.channel.guild) return message.reply('** This command only for servers**');
    if(message.author.user !== '333239187509870595' && message.author.id !== '415602689100087297') return message.reply('**This Command Just For Admins**')// :|
    console.log(args[0]);
  client.users.get(args[0]).send(args[1]);


    }
    }catch(error){console.log(error)}
});

                        function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400);
    let hours = Math.floor(time % 31536000 % 86400 / 3600);
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
    days = days > 9 ? days : '0' + days;
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;

}




client.login(process.env.BOT_TOKEN);
