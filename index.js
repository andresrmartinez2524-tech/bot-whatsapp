const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

const client = new Client();

// 📱 QR
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

// 🚀 Bot listo
client.on('ready', () => {
  console.log('Bot listo ✅');

  // ===== MENSAJES DIARIOS =====

  // 🕗 8:00 AM
  cron.schedule('0 8 * * *', () => {
    enviar("Amor, recuerda los probióticos 💊");
  });

  // 🕘 9:00 AM
  cron.schedule('0 9 * * *', () => {
    enviar("Amor, hora de ir al gym 💪");
  });

  // 🕙 10:00 AM
  cron.schedule('0 10 * * *', () => {
    enviar("Amor, hora de desayunar ☕");
  });

  // 🕐 1:00 PM
  cron.schedule('0 13 * * *', () => {
    enviar("Amor, almuerzo ❤️");
  });

  // 🕘 9:00 PM
  cron.schedule('0 21 * * *', () => {
    enviar("Amor, hora de comer ❤️");
  });

  // 🌙 10:00 PM
  cron.schedule('0 22 * * *', () => {
    enviar("Amor, no olvides las pastillitas 💊");
  });

  // ===== RECORDATORIOS MENSUALES =====

  // 📅 26 de cada mes
  cron.schedule('0 9 26 * *', () => {
    enviar("Amor, recuerda enviar la cuenta de cobro 📄");
  });

  // 📅 4 de cada mes
  cron.schedule('0 9 4 * *', () => {
    enviar("Amor, pagarle a Sols $29.000 💸");
  });

  // 📅 30 de cada mes
  cron.schedule('0 9 30 * *', () => {
    enviar("Amor, pagar tarjetas 💳");
  });

});

// 💌 Función para enviar
function enviar(texto) {
  client.sendMessage('573102900407@c.us', texto);
}

// ▶️ iniciar
client.initialize();