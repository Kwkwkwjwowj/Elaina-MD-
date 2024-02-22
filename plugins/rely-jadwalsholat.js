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

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '*Example*: .jadwalsholat Surabaya', m)
    return
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let city = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${city}?apikey=ayakaviki`)
  let json = await res.json()
  if (res.ok) {
    let message = `Jadwal sholat di ${json.result.wilayah}\n\nImsak: ${json.result.imsak}\nSubuh: ${json.result.subuh}\nDzuhur: ${json.result.dzuhur}\nAshar: ${json.result.ashar}\nMaghrib: ${json.result.maghrib}\nIsya: ${json.result.isya}`
    conn.reply(m.chat, message, m)
  } else {
    conn.reply(m.chat, `Terjadi kesalahan: ${json.message}`, m)
  }
}

handler.help = ['jadwalsholat']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.command = /^jadwalsholat/i

module.exports = handler