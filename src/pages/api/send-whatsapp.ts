// Para Next.js 13+ (App Router)
export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();
    
    const evolutionApiUrl = process.env.EVOLUTION_API_URL;
    const instanceName = process.env.EVOLUTION_INSTANCE_NAME;
    const apiKey = process.env.EVOLUTION_API_KEY;
    const yourWhatsAppNumber = process.env.YOUR_WHATSAPP_NUMBER;
    
    const messageText = `🌟 *Novo Contato do Site - Dainail Studio* 🌟\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Telefone:* ${phone}\n` +
      `📧 *E-mail:* ${email}\n\n` +
      `💬 *Mensagem:*\n${message}\n\n` +
      `⏰ *Data/Hora:* ${new Date().toLocaleString('pt-BR')}`;
    
    const response = await fetch(`${evolutionApiUrl}/message/sendText/${instanceName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey
      },
      body: JSON.stringify({
        number: yourWhatsAppNumber,
        text: messageText
      })
    });
    
    if (response.ok) {
      return Response.json({ success: true });
    } else {
      throw new Error('Erro na Evolution-API');
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}