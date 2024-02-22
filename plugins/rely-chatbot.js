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

let handler = async (m, { text }) => {
  if (!text) {
    throw '*Example*: .bot how are you?';
  }

  let apiKey = 'rJrQEQIbx7kJFkL8';
  let brainId = '175987';
  let apiUrl = `http://api.brainshop.ai/get?bid=${brainId}&key=${apiKey}&uid=${m.sender}&msg=${encodeURIComponent(text)}`;

  try {
    let response = await axios.get(apiUrl);
    let reply = response.data.cnt;
    m.reply(reply);
  } catch (e) {
    console.log(e);
    m.reply('Failed to get reply from bot. Please try again later.');
  }
};

handler.help = ['bot'];
handler.tags = ['tools'];
handler.command = /^bot$/i;

module.exports = handler;
