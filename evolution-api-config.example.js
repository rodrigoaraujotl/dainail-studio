// ========================================
// CONFIGURAÇÃO DA EVOLUTION-API
// ========================================

// 1. INSTALAÇÃO DA EVOLUTION-API
// ========================================

// Opção 1: Docker (Recomendado)
/*
git clone https://github.com/EvolutionAPI/evolution-api.git
cd evolution-api
cp .env.example .env
# Configure o .env com suas credenciais
docker-compose up -d
*/

// Opção 2: NPM Global
/*
npm install -g @evolution/api
evolution-api start
*/

// 2. CONFIGURAÇÃO NO CONTACT.TSX
// ========================================

// Substitua as variáveis nas linhas 40-43 do Contact.tsx:
const EVOLUTION_CONFIG = {
  // URL da sua Evolution-API (local ou servidor)
  EVOLUTION_API_URL: 'http://localhost:8080', // ou 'https://sua-api.herokuapp.com'
  
  // Nome da instância (você escolhe)
  EVOLUTION_INSTANCE_NAME: 'dainail-studio',
  
  // Chave da API (configure no .env da Evolution-API)
  EVOLUTION_API_KEY: 'sua-chave-secreta-aqui',
  
  // Seu número do WhatsApp (com código do país)
  YOUR_WHATSAPP_NUMBER: '5511999999999' // Formato: 55 + DDD + número
};

// 3. COMANDOS PARA CONFIGURAR A INSTÂNCIA
// ========================================

// Criar instância:
/*
curl -X POST 'http://localhost:8080/instance/create' \
-H 'Content-Type: application/json' \
-H 'apikey: sua-chave-secreta-aqui' \
-d '{
  "instanceName": "dainail-studio",
  "token": "seu-token-personalizado"
}'
*/

// Conectar WhatsApp (gera QR Code):
/*
curl -X GET 'http://localhost:8080/instance/connect/dainail-studio' \
-H 'apikey: sua-chave-secreta-aqui'
*/

// Verificar status:
/*
curl -X GET 'http://localhost:8080/instance/fetchInstances' \
-H 'apikey: sua-chave-secreta-aqui'
*/

// 4. VARIÁVEIS DE AMBIENTE (.env)
// ========================================

/*
# Adicione no .env da Evolution-API:
DATABASE_URL="file:./dev.db"
DATABASE_CONNECTION_URI=""
DATABASE_CONNECTION_CLIENT_NAME=""
REDIS_URI=""
REDIS_PREFIX_KEY="evolution"
JWT_SECRET="sua-chave-jwt-secreta"
API_KEY="sua-chave-secreta-aqui"
EXPOSE_IN_FETCH_INSTANCES=true
DEL_INSTANCE=false
PORT=8080
*/

// 5. DEPLOY EM PRODUÇÃO
// ========================================

// Railway:
/*
1. Faça fork do repositório Evolution-API
2. Conecte no Railway
3. Configure as variáveis de ambiente
4. Deploy automático
*/

// Heroku:
/*
1. heroku create sua-evolution-api
2. heroku config:set API_KEY=sua-chave
3. git push heroku main
*/

// VPS:
/*
1. Clone o repositório no servidor
2. Configure o .env
3. Use PM2: pm2 start evolution-api
4. Configure nginx como proxy reverso
*/

// 6. TESTE DA CONFIGURAÇÃO
// ========================================

// Teste de envio manual:
/*
curl -X POST 'http://localhost:8080/message/sendText/dainail-studio' \
-H 'Content-Type: application/json' \
-H 'apikey: sua-chave-secreta-aqui' \
-d '{
  "number": "5511999999999",
  "text": "Teste da Evolution-API funcionando! 🚀"
}'
*/

// 7. FUNCIONALIDADES AVANÇADAS
// ========================================

// Enviar com mídia:
/*
{
  "number": "5511999999999",
  "mediatype": "image",
  "media": "https://example.com/image.jpg",
  "caption": "Legenda da imagem"
}
*/

// Webhook para receber mensagens:
/*
{
  "webhook": {
    "url": "https://seu-site.com/webhook",
    "events": ["messages.upsert"]
  }
}
*/

export default EVOLUTION_CONFIG;