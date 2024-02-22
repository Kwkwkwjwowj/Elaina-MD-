const fetch = require('node-fetch');
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example:* reellyxd.me`;
  }
  if (text.includes('https://') || text.includes('http://')) {
    throw `*Example*: reellyxd.me`;
  }
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Token=6c7bd1ce704d92c90e2f78d42641a9ee0cbcef198a6ad62a3dd06deb22af6fd3' //ganti apikey sendiri kalo abis :v
    }
  };
  try {
    const response = await fetch(`https://whoisjson.com/api/v1/whois?domain=${text}`, options);
    const data = await response.json();
    m.reply(JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};
handler.command = ['whois2'];
handler.tags = ['internet'];
handler.premium = false;
handler.register = true;
handler.limit = true;
module.exports = handler;