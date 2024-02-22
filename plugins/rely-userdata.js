/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let axios = require('axios')

let handler = async (m, { text }) => {
  if (!text) throw '*Example*: .apkdl com.whatsapp'
  let res = await axios.get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${global.lolkey}&package=${encodeURIComponent(text)}`)
  if (!res.data.result) {
    return m.reply(`Maaf, aplikasi dengan nama *${text}* tidak ditemukan.`)
  }
  let apk = res.data.result
  let caption = `
*App name:* ${apk.apk_name}
*Version:* ${apk.apk_version}
*Developer:* ${apk.apk_author}
  `.trim()
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: 'ðŸ•’',
      key: m.key,
    }
  })
  m.reply(`Mengirim ${apk.apk_name}...\Harap tunggu sebentar`)
  conn.sendFile(m.chat, apk.apk_link, `${apk.apk_name}.apk`, caption, m)
}

handler.help = ['apkdl <nama aplikasi>']
handler.tags = ['downloader']
handler.command = /^apk(dl|download)$/i
handler.limit = true

module.exports = handler