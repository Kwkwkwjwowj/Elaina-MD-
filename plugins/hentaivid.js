let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.xyroinee.xyz/api/anime/hentai?apikey=Gwreelly')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Istri kartun', m)
}
handler.help = ['hentaivid']
handler.tags = ['internet']
handler.command = /^(hentaivid)$/i
handler.limit = true
module.exports = handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/