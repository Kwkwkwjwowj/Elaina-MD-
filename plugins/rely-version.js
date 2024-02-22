/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fs = require('fs');
let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
let version = packageJson.version;

let handler = async (m, { conn }) => {
  conn.reply(m.chat, `${namebot} Version: *${version}*`, m, {
    contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
        body: "",
        thumbnailUrl: flythumb,
        sourceUrl: web,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.command = ['version'];
handler.help = ['version'];
handler.tags = ['info'];

module.exports = handler;
