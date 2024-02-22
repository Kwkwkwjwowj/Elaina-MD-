let fetch = require('node-fetch')

async function handler(m) {
    let dann = await fetch(`https://api.lolhuman.xyz/api/growtopia?apikey=${global.lolhuman}`)
    let res = await dann.json()
    let hasil = `• *PLAYERS ONLINE*
Player: *${res.result.player_online}*

• *PEMENANG WOTD*
World: *${res.result.wotd.name}*`
m.reply(hasil)
}

handler.help = ['gtplayer']
handler.tags = ['info', 'internet']
handler.command = /^(gtplayer)$/i

module.exports = handler