/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  if (m.text.toLowerCase() === '.quotesimage') {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
    let url = `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${global.lolkey}`
    let response = await fetch(url)
    let imageBuffer = await response.buffer()
    conn.sendFile(m.chat, imageBuffer, 'quotesimage.jpg', '', m)
  }
}

handler.command = /^(quotesimage)$/i
handler.help = ['quotesimage']
handler.tags = ['internet']
handler.limit = true
handler.premium = false
handler.register = true

module.exports = handler