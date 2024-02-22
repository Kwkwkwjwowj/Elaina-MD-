var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* .ai2 Cara Masuk Islam`
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${global.lolkey}&text=${text}`)
  var res = await result.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['ai2', 'openai2'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;