
const axios = require('axios')

let handler = async (m, { text }) => {
  if (!text) throw '*Example*: .zodiak leo'
  
  let zodiac = text.trim().toLowerCase()
  let response = await axios.get(`https://api.lolhuman.xyz/api/zodiak/${zodiac}?apikey=${global.lolkey}`)
  
  let { result } = response.data
  let message = `Ramalan zodiak untuk ${zodiac.toUpperCase()} hari ini:\n\n${result}`
  
  m.reply(message)
}

handler.help = ['zodiak <zodiak>']
handler.tags = ['internet']
handler.register = true
handler.limit = true
handler.command = /^zodiak$/i

module.exports = handler