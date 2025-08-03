import React, { useState } from 'react';
import { Card, CardContent} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Configurações da Evolution-API (configure estas variáveis)
    const EVOLUTION_API_URL = 'https://evolution.websense.consulting'; // Ex: 'http://localhost:8080' ou 'https://sua-api.com'
    const EVOLUTION_INSTANCE_NAME = 'Rodrigo - WebSense Consulting'; // Ex: 'dainail-studio'
    const EVOLUTION_API_KEY = 'DAF3A91718B3-46D2-A9A7-8CFFC1D130A1'; // Sua chave da API
    const YOUR_WHATSAPP_NUMBER = '5511953502929'; // Seu número do WhatsApp

    try {
      // Formatando a mensagem
      const message = `🌟 *Novo Contato do Site - Dainail Studio* 🌟\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📱 *Telefone:* ${formData.phone}\n` +
        `📧 *E-mail:* ${formData.email}\n\n` +
        `💬 *Mensagem:*\n${formData.message}\n\n` +
        `⏰ *Data/Hora:* ${new Date().toLocaleString('pt-BR')}`;

      // Tentar enviar via Evolution-API se configurada
      if (EVOLUTION_API_URL && EVOLUTION_INSTANCE_NAME && EVOLUTION_API_KEY) {
        try {
          const response = await fetch(`${EVOLUTION_API_URL}/message/sendText/${EVOLUTION_INSTANCE_NAME}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': EVOLUTION_API_KEY
            },
            body: JSON.stringify({
              number: YOUR_WHATSAPP_NUMBER,
              text: message
            })
          });

          if (response.ok) {
            setSubmitMessage('✅ Mensagem enviada com sucesso!');
            setFormData({ name: '', phone: '', email: '', message: '' });
            return;
          } else {
            console.warn('Evolution-API falhou, usando WhatsApp Web como fallback');
          }
        } catch (evolutionError) {
          console.warn('Evolution-API não disponível, usando WhatsApp Web:', evolutionError);
        }
      }

      // Fallback: Abrir WhatsApp Web
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      setSubmitMessage('📱 Redirecionando para o WhatsApp...');
      setFormData({ name: '', phone: '', email: '', message: '' });

    } catch (error) {
      console.error('Erro:', error);
      setSubmitMessage('❌ Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.email && formData.message;

  return (
    <section id="contato" className="pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground">
            Tem alguma dúvida ou quer agendar um horário? Envie uma mensagem!
          </p>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos como podemos ajudar você..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
                  submitMessage.includes('sucesso') || submitMessage.includes('Redirecionando') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;