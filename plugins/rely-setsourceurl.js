const fs = require('fs');

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .setsource https://github.com/ReellyXd');
    return;
  }

  let configFile = './config.js';
  let configData = fs.readFileSync(configFile, 'utf8');

  let newValue = `global.sourceUrl = "${text}"`;

  configData = configData.replace(/global\.sourceUrl\s*=\s*".*"/, newValue);

  fs.writeFileSync(configFile, configData, 'utf8');

  m.reply('Berhasil mengubah sourceUrl');
};

handler.help = ['setsource'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^setsource$/i;

module.exports = handler;
