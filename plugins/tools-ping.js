/* 
Script By Reelly XD
  � YT: ReellyXD
  � IG: reellyxd
Buy Script? 
  � WA: +62 857-0436-85323
  � TELE: t.me/rely_xd
  � Github: github.com/ReellyXD
*/

const { performance } = require('perf_hooks');
const { version: nodeVersion, npmVersion } = require('process');
const { version: packageVersion } = require('../package.json');

let handler = async (m, { conn }) => {
  const start = performance.now();
    
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  const chatServer = 's.whatsapp.net';
  const connServer = conn.baseURL?.split('//')[1]?.split(':')[0] || 'Not available';
  const messageDelay = Math.floor(performance.now() - start);

  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
  const cpuUsage = process.cpuUsage().user / 1000000;

  const npmVersionOutput = npmVersion ? `◦ Npm: ${npmVersion}` : '◦ Npm: Not available';

  const reply = `• *Ping!*\n\n• *Network Specs:*\n◦ Chat Server: ${chatServer}\n◦ Connection Server: ${connServer}\n◦ Message Delay: ${messageDelay}ms\n\n• *System Specs:*\n◦ Memory Usage: ${memoryUsage.toFixed(2)}MB\n◦ CPU Usage: ${cpuUsage.toFixed(2)}s\n\n• *Bot Version:*\n◦ Node.js: ${nodeVersion}\n◦ Language: JavaScript\n${npmVersionOutput}\n◦ Version: ${version}\n◦ Owner: DaffaXd`;

  m.reply(reply);
};

handler.command = ['ping'];
handler.tags = ['info'];
handler.help = ['ping'];

module.exports = handler;
