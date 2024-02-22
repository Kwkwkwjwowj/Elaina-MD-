/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '*Example*: .nekogirl reelly'
  m.reply('_Proses..._')
  var tio = `https://oni-chan.my.id/api/canvas/nekogirl1?text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, tio, 'ffff.jpg', wm, m, false)
};
handler.command = handler.help = ['nekogirl'];
handler.tags = ['maker'];
handler.register = true;
handler.limit = true;
module.exports = handler;