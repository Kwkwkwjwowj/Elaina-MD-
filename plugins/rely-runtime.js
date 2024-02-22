/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn }) => {
  let uptime = process.uptime();
  let hari = Math.floor(uptime / 86400);
  uptime %= 86400;
  let jam = Math.floor(uptime / 3600);
  uptime %= 3600;
  let menit = Math.floor(uptime / 60);
  let detik = Math.floor(uptime % 60);
  let caption = `*${namebot}*\n*Telah aktif selama*\n${hari} hari\n${jam} jam\n${menit} menit\n${detik} detik`;

  m.reply(caption);
};

handler.help = ['ping'];
handler.tags = ['info'];
handler.command = /^ping$/i;
handler.limit = false;
handler.group = false;
module.exports = handler;
