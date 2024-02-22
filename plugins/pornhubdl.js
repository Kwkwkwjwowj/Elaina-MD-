var fetch = require("node-fetch")

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.pornhubdl https://www.pornhub.com/view_video.php?viewkey=ph622b5cb87c1a9*`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/pornhub?url=${text}&apikey=Gwreelly`)
  let json = await res.json()
  conn.sendMessage(m.chat, { video: { url: json.data.files.download_urls.480p }, caption: `Nih`, }, { quoted: m })
  }
handler.help = ['pornhubdl']
handler.tags = ['downloader']
handler.command = /^pornhubvideo|pornhubdl$/i
handler.premium = true

module.exports = handler