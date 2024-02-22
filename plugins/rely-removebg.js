/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn }) => {
  let message = m.quoted ? m.quoted : m;
  let mime = (message.msg || message).mimetype || '';

  if (/image/.test(mime)) {
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: 'ðŸ•’',
        key: m.key,
      }
    });
    let image = await message.download();
    let imageUrl = await uploadImage(image);

    try {
      let removeBgUrl = `https://api.lolhuman.xyz/api/removebg?apikey=${global.lolkey}&img=${encodeURIComponent(imageUrl)}`;
      let removeBgResponse = await axios.get(removeBgUrl, { responseType: 'arraybuffer' });
      let caption = 'Ini gambar Anda dengan background yang dihapus.';
      conn.sendFile(m.chat, Buffer.from(removeBgResponse.data), 'removed.png', caption, m);
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'Terjadi kesalahan saat menghapus latar belakang gambar.', m);
    }
  } else {
    conn.reply(m.chat, 'Reply gambar dengan caption *.removebg*', m);
  }
};

handler.help = ['nobg', 'removebg'];
handler.tags = ['tools'];
handler.command = /^(nobg|removebg)$/i;

module.exports = handler;
