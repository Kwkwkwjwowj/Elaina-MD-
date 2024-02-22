let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === '.sc' || m.text.toLowerCase() === '.script' || m.text.toLowerCase() === 'sc') {
 (async() => {
const arr = [
  "Beli Script Di DaffaXd, Udah Gratis Panel Om",
  "Beli Script Disini Murah Om, https://chat.whatsapp.com/D6bHVUjyGj06bb6iZeUsOI"
];

const { key } = await conn.sendMessage(m.chat, { text: 'Cari Sc? Join Group' }, { quoted: m});

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()

   }
}

module.exports = handler