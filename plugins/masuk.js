function handler(m) {
    m.reply('Chat ke owner untuk informasi lebih lanjut.')
    this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
    this.sendContact(m.chat, '6281250521455@s.whatsapp.net', 'Owner Bot', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
