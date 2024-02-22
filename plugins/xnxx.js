const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw '*Example*: .xnxx japanese';
  }
  
  let apiUrl = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`;
  
  try {
    let response = await axios.get(apiUrl);
    let data = response.data;
    
    if (data.result.length > 0) {
      let message = '*Berikut beberapa hasil pencarian:*\n\n';
      
      for (let result of data.result) {
        let title = result.title;
        let views = result.views;
        let duration = result.duration;
        let uploader = result.uploader;
        let link = result.link;
        
        message += `◦ *Title:* ${title}\n◦ *Views:* ${views}\n◦ *Duration:* ${duration}\n◦ *Uploader:* ${uploader}\n◦ *Link:* ${link}\n\n`;
      }
      
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
      m.reply(message);
    } else {
      throw 'Tidak ada hasil yang ditemukan untuk kueri penelusuran yang diberikan.';
    }
  } catch (error) {
    console.log(error);
    throw 'Terjadi kesalahan saat mengambil data.';
  }
};

handler.help = ['xnxx'];
handler.tags = ['internet'];
handler.premium = true
handler.command = /^xnxx/i;

module.exports = handler;
