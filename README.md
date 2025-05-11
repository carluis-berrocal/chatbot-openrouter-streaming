# 🤖 Chatbot IA con OpenRouter + Vite + Netlify Functions

Este es un chatbot web que utiliza la API de [OpenRouter](https://openrouter.ai) con **streaming de texto en tiempo real**, desarrollado con **Vite** y desplegado en **Netlify** usando Functions como backend serverless.

---

## 🚀 Tecnologías utilizadas

- ⚡ Vite (Frontend)
- 🧠 OpenRouter API
- 📡 Netlify Functions (Serverless backend)
- 🎨 SweetAlert2 (para mensajes)
- ☁️ Netlify CLI para desarrollo local y despliegue

---

## 📦 Instalación local

```bash
# 1. Clona el repositorio
git clone https://github.com/carluis-berrocal/chatbot-openrouter-streaming.git
cd chatbot-openrouter-streaming

# 2. Instala las dependencias
npm install

# 3. Instala Netlify CLI (si no lo tienes)
npm install -g netlify-cli

# 4. Crea un archivo .env con tu clave de OpenRouter
echo "OPENROUTER_KEY=sk-or-v1-tu-clave-aqui" > .env

#5 . 🧪 Ejecutar en modo desarrollo (con Functions activas)
netlify dev
Esto inicia Vite y las funciones serverless de Netlify. Accede en:
📍 http://localhost:8888

📂 Estructura del proyecto
.
├── netlify/
│   └── functions/
│       └── chat.js       # Backend para conectar con OpenRouter
├── src/
│   ├── main.js           # Frontend con streaming
│   └── style.css
├── index.html
├── .env                 # Clave secreta (NO subir a GitHub)
├── package.json
├── vite.config.js
└── README.md

📄 Licencia
MIT © [Carluis]