/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn, text, command }) => {
  let report = text || "";
  let ownerNumber = "6283871211368";

  if (report === "") {
    conn.reply(m.chat, `*Contoh*: .report fitur anime error, tolong fix`, m);
    return;
  }

  let message = `◦ Dari: ${m.sender}\n◦ laporan teks: ${report}`;
  conn.sendMessage(ownerNumber + "@s.whatsapp.net", message, "conversation");
  conn.reply(m.chat, "Terima kasih atas laporannya! Bug akan segera diperbaiki.", m);
};
handler.help = ["report <teks>", "reportbug <teks>"];
handler.tags = ["owner"];
handler.command = /^(report|reportbug)$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;