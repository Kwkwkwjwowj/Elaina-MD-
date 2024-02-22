
const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply('Masukkan permintaan.');
  } else {
    const apiUrl = 'https://api.azz.biz.id/api/simi';
    const queryParams = new URLSearchParams({
      q: text,
      user: m.sender, 
      key: 'alok',
    });

    const apiUrlWithParams = `${apiUrl}?${queryParams.toString()}`;

    try {
      const response = await fetch(apiUrlWithParams);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      m.reply(data.respon);
    } catch (error) {
      console.error('Fetch error:', error);
      m.reply('Terjadi kesalahan saat mengakses API.');
    }
  }
}

handler.help = ['simi'];
handler.tags = ['internet'];
handler.command = /^simi$/i;

module.exports = handler;