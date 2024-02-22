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

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .roboguru 1+1', m)
  }
  let apikey = `${global.lolkey}`
  let query = encodeURIComponent(args.join(' '))
  let grade = 'sma'
  let subject = 'sejarah'
  let url = `https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${query}&grade=${grade}&subject=${subject}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  if (result.length === 0) {
    return conn.reply(m.chat, 'Maaf, tidak dapat menemukan jawaban untuk pertanyaan itu', m)
  }
  let answer = result[0].answer
  let message = `*Pertanyaan:* ${result[0].question}\n\n*Jawaban:* ${answer}`
  conn.reply(m.chat, message, m)
}

handler.help = ['roboguru <teks>']
handler.tags = ['tools']
handler.command = /^(roboguru)$/i
handler.register = true
handler.limit = true

module.exports = handler