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
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, text }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Kirim/Balas Gambar dengan caption *.jadianime*';
conn.chatRead(m.chat)
conn.sendMessage(m.chat, {
    react: {
        text: '🕒',
        key: m.key,
    }
})
  let media = await q.download();
  let url = await uploadImage(media);
  let styles = ['anime', 'angel', 'princess', 'manhwa_female', 'manhwa_male'];

  let sendPromises = styles.map(async (style) => {
    const queryParams = {
      style: style,
      json: false,
    };

    const response = await fetch(url);
    const buffer = await response.buffer();

    const form = new FormData();
    form.append('file', buffer, {
      filename: 'image.jpg',
      contentType: 'image/jpeg',
      knownLength: buffer.length,
    });

    const { data } = await axios
      .request({
        baseURL: 'https://api.itsrose.life',
        url: '/image/differentMe',
        method: 'POST',
        params: {
          ...queryParams,
          apikey: global.rose,
        },
        data: form,
        responseType: 'arraybuffer', 
      })
      .catch((e) => e?.response?.data);

    if (!data) {

      throw 'Gagal memproses gambar.';
    }

    const resultBuffer = Buffer.from(data, 'binary'); 

    let caption = `STYLE: ${style.replace(/_/g, ' ').toUpperCase()}`;

    return conn.sendFile(m.chat, resultBuffer, 'ppk.jpg', caption, m);
  });
  await Promise.all(sendPromises);
};

handler.help = ['jadianime'];
handler.tags = ['tools'];
handler.command = /^(jadianime)$/i;
handler.premium = true;

module.exports = handler;