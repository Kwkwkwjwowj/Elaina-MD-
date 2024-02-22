/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/
const fetch = require('node-fetch');
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Example*: .lookup reellyxd.me`;

  if (text.includes('https://') || text.includes('http://')) throw `*Example*: .lookup sazumiviki.me`;

  try {
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    })
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
      .then(response => response.text())
      .then(data => {
        m.reply(`Ini Adalah Hasil Pencarian Dns Untuk ${text}:\n${data}`);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        m.reply('Tidak dapat memproses permintaan Pencarian DNS');
      });
    });
    m.reply(`Ini Adalah Hasil Pencarian Dns Untuk ${text}:\n${res1}`);
    console.log(res1);

  } catch (error) {
    console.log(error);
    m.reply('*Invalid data!*');
  }
};

handler.command = ['dnslookup', 'hackertarget', 'lookup','dns'];
handler.help = ['dnslookup', 'hackertarget', 'lookup','dns'];
handler.tags = ['internet'];
handler.premium = false;
handler.register = true
handler.limit = true

module.exports = handler;