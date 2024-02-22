const axios = require('axios');
const { createReadStream } = require('fs');
const FormData = require('form-data');

const imgbbApiKey = '86f9b93dbbe540a7ab5ec07588837fb8';

let handler = async (m, { conn }) => {
  if (!m.quoted || !m.quoted.fileSha256) {
    throw 'Mohon reply sebuah gambar untuk menggunakan perintah ini.';
  }

  let image = await conn.downloadAndSaveMediaMessage(m.quoted);
  let formData = new FormData();
  formData.append('image', createReadStream(image));

  try {
    let uploadRes = await axios.post('https://api.imgbb.com/1/upload', formData, {
      params: {
        key: imgbbApiKey
      },
      headers: formData.getHeaders()
    });

    let imageUrl = uploadRes.data.data.url;
    let recolorApi = `https://api.itsrose.site/image/recolor?url=${encodeURIComponent(imageUrl)}&apikey=Rs-AgesuXD`;
    let recolorRes = await axios.get(recolorApi);

    let recoloredImageUrl = recolorRes.data.result;
    let recoloredImage = await axios.get(recoloredImageUrl, {
      responseType: 'arraybuffer'
    });

    conn.sendFile(m.chat, Buffer.from(recoloredImage.data, 'binary'), 'recolored_image.jpg', 'Hasil Recolor', m);
  } catch (error) {
    console.log(error);
    throw 'Terjadi kesalahan saat memproses gambar.';
  }
};

handler.help = ['recolor2'];
handler.tags = ['tools'];
handler.command = /^recolor2$/i;

module.exports = handler;
