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

async function handler(m, { text }) {
  const shalat = text.trim()
  if (!shalat) return m.reply('Silahkan masukkan jenis shalat!')

  try {
    const url = `https://api.lolhuman.xyz/api/niatsholat/${encodeURIComponent(shalat)}?apikey=${global.lolkey}`
    const { data } = await axios.get(url)

    if (data.result === null) {
      return m.reply(`Tidak dapat menemukan niat shalat jenis ${shalat}!`)
    }

    const niatShalat = data.result.id

    m.reply(niatShalat)
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat mengambil data niat shalat!')
  }
}

handler.help = ['niatshalat']
handler.tags = ['islam']
handler.command = /^(niatshalat|niat)$/i
handler.register = true
handler.limit = true

module.exports = handler