/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  try {
    let res = await fetch(`https://api.lolhuman.xyz/api/random/puisi?apikey=${global.lolkey}`)
    let json = await res.json()
    if (json.status !== 200) {
      throw json
    }
    let { result } = json
    conn.reply(m.chat, result, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.register = true
handler.limit = true

module.exports = handler