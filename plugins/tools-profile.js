/* 
Script By Reelly XD
  � YT: ReellyXD
  � IG: reellyxd
Buy Script? 
  � WA: +62 857-0436-85323
  � TELE: t.me/rely_xd
  � Github: github.com/ReellyXD
*/

let fetch = require("node-fetch");

let handler = async (m, { conn, command }) => {
  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;

    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[who];
    let username = user.name;
    let tag = '+62 ' + who.split('@')[0].slice(2, 6) + '-' + who.split('@')[0].slice(6);
    let api = `wa.me/${who.split('@')[0]}`;

    let limit = user.limit;
    let balance = user.balance || 0;
    let level = user.level;
    let exp = user.exp;
    let age = user.age;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not a premium";

    let caption = `
•  *P R O F I L E*

┌  ◦  *Name* : ${username}
│  ◦  *Tag* : ${tag}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *Balance* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
└  ◦  *Age* : ${age}
    `.trim();

    conn.sendFile(m.chat, pp, "profile.jpg", caption, m, { jpegThumbnail: pp });
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    let username = user.name;
    let tag = '+62 ' + sender.split('@')[0].slice(2, 6) + '-' + sender.split('@')[0].slice(6);
    let api = `wa.me/${sender.split('@')[0]}`;

    let limit = user.limit;
    let balance = user.balance || 0;
    let level = user.level;
    let exp = user.exp;
    let age = user.age;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not a premium";

    let caption = `
•  *P R O F I L E*

┌  ◦  *Name* : ${username}
│  ◦  *Tag* : ${tag}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *Balance* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
└  ◦  *Age* : ${age}
    `.trim();

    conn.sendFile(m.chat, pp, 'ppviki.png', caption, m, { jpegThumbnail: pp });
  }
};

handler.command = /^profile$/i;
handler.help = ['profile *@user*'];
handler.tags = ['start'];
handler.register = true;

module.exports = handler;
