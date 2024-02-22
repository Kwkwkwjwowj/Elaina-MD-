/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example:* .tiktokslide https://vt.tiktok.com/ZSLCxTetc/', m)
  }
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/tiktokslide?apikey=${apikey}&url=${args[0]}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  let caption = ``
  for (let media of result) {
    let response = await fetch(media)
    let buffer = await response.buffer()
    conn.sendFile(m.chat, buffer, 'tetw2.jpg', null, m)
  }
}

handler.help = ['tiktokslide <link>']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^(ttslide|tiktokslide)$/i

module.exports = handler