/* 
Script By Reelly XD
  � YT: ReellyXD
  � IG: reellyxd
Buy Script? 
  � WA: +62 857-0436-85323
  � TELE: t.me/rely_xd
  � Github: github.com/ReellyXD
*/

const axios = require('axios');

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      return m.reply('Example: .emailtemp example@gmail.com');
    }

    let email = encodeURIComponent(text);
    let messagesUrl = `https://api.itsrose.site/tools/tempMail/messages?email=${email}&apikey=${global.rose}`;
    let messagesResponse = await axios.get(messagesUrl);
    let messages = messagesResponse.data.mails;

    if (messages.length > 0) {
      let message = '';
      for (let i = 0; i < messages.length; i++) {
        message += `Dari: ${messages[i].from}\nSubjek: ${messages[i].subject}\n\n${messages[i].body_text}\n\n`;
      }
      m.reply(message);
    } else {
      m.reply('Tidak ada pesan yang ditemukan untuk alamat email ini.');
    }
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan saat mengambil pesan.');
  }
};

handler.help = ['emailtemp'];
handler.tags = ['tools'];
handler.command = /^emailtemp$/i;

module.exports = handler;