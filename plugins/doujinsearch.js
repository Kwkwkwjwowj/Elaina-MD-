let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
if (!text) throw 'ea'
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-search?q=${text}&apikey=GwReelly`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail) throw 'Error!'
  conn.sendFile(m.chat, json.thumbnail, '', 'Istri kartun', m)
}
handler.help = ['doujinsearch']
handler.tags = ['nsfw']
handler.command = /^(doujinsearch)$/i
handler.limit = true
module.exports = handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/