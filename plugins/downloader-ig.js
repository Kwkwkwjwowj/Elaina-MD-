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
    return conn.reply(m.chat, 'Silahkan masukkan link postingan instagram yang ingin anda download', m)
  }
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`
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
  let caption = `*${result.account.full_name} (@${result.account.username})*\n`
  caption += `Caption : ${result.caption}`
  for (let media of result.media) {
    let response = await fetch(media)
    let buffer = await response.buffer()
    conn.sendFile(m.chat, buffer, 'instagram2.jpg', caption.trim(), m)
  }
}

handler.help = ['ig <link>']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^(ig|instagram)$/i

module.exports = handler