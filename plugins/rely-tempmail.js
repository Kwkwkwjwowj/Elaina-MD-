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

let handler = async (m, { text, conn }) => {
  if (!text) throw '*Example:* .tempmail DaffaXd';

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    },
  });

  try {
    const res = await axios.get(`https://api.itsrose.life/tools/tempMail/new?name=${text}&apikey=${global.rose}`);
    const result = await res.data;
    const { status, message } = result;


    if (status) {
      let email = result.email
      let msg = `${email}`;
      m.reply(msg);
    } else {
      console.log(message);
      throw 'Gagal membuat alamat nama email sementara.';
    }
  } catch (e) {
    console.log(e);
    throw 'Gagal membuat alamat email sementara.';
  }
};

handler.help = ['tempmail'];
handler.tags = ['tools'];
handler.command = /^tempmail$/i;

module.exports = handler;