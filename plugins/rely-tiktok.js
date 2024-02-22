/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fg = require('api-dylux');
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper');

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `*Example:* .tiktok https://vm.tiktok.com/xxxxx`;
  }
  if (!args[0].match(/tiktok/gi)) {
    throw 'Pastikan tautannya dari TikTok';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let p = await fg.tiktok(args[0]);
    let te = `
• *TikTok Downloader*

• *Username:* ${p.unique_id}
• *Duration:* ${p.duration}`;
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key,
      }
    });
  } catch (error) {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
      .catch(async _ => await tiktokdlv2(args[0]))
      .catch(async _ => await tiktokdlv3(args[0]));
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
    if (!url) {
      throw 'Terjadi kesalahan saat mengunduh video';
    }
    let te = `
• *TikTok Downloader*

• *Username:* ${nickname}
• *Duration:* ${video.duration}
• *Link:* ${args[0]}`;
    conn.sendFile(m.chat, url, 'tiktok.mp4', te, m);
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key,
      }
    });
  }
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;