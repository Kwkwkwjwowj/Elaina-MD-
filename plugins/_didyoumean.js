/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

let didyoumean = require('didyoumean');
let similarity = require('similarity');

let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• Apakah kamu mencari menu berikut ini?\n\n◦ Nama command: *${usedPrefix + mean}*\n◦ Hasil kemiripan: *${similarityPercentage}%*`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
       	showAdAttribution: true,
            title: namebot,
            thumbnailUrl: 'https://telegra.ph/file/c13e4e4462997d550134a.jpg',
            sourceUrl: web,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    }
  }
}

module.exports = handler;