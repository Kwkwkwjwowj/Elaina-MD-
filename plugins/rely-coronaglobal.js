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
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let res = await fetch(`https://api.lolhuman.xyz/api/corona/global?apikey=${global.lolkey}`)
    let json = await res.json()
    if (json.status === 200) {
      let { positif, meninggal, sembuh, dirawat } = json.result
      let caption = `🌍 Kasus COVID-19 Global\n\n😷 Terkonfirmasi: ${positif}\n😊 Sembuh: ${sembuh}\n💀 Meninggal: ${meninggal}\n🏥 Dirawat: ${dirawat}`
      conn.reply(m.chat, caption, m)
    } else {
      conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    }
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['coronaglobal']
handler.tags = ['info']
handler.command = /^coronaglobal$/i
handler.register = true
handler.limit = true

module.exports = handler