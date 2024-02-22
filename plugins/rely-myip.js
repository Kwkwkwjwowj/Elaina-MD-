/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
    const { data } = await axios.get('https://api.ipify.org')
    conn.reply(m.chat, `IP kamu adalah ${data}`, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['myip']
handler.tags = ['internet']
handler.command = /^myip$/i
handler.owner = true;
handler.register = true
handler.limit = true

module.exports = handler