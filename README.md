# 🤖 Chatbot IA con OpenRouter + Vite + Netlify Functions

Este es un chatbot web que utiliza la API de [OpenRouter](https://openrouter.ai) para responder preguntas con texto en streaming, simulando una conversación en tiempo real. El frontend está construido con **Vite**, y el backend usa **Netlify Functions** para mantener segura la clave de API.

---

## 🚀 Tecnologías utilizadas

- ⚡ [Vite](https://vitejs.dev/) (Frontend)
- 🧠 [OpenRouter API](https://openrouter.ai/)
- ☁️ [Netlify Functions](https://docs.netlify.com/functions/overview/)
- 💬 [Streaming de texto](https://sdk.ai-jsx.com/docs/stream-text)
- 🎨 [SweetAlert2](https://sweetalert2.github.io/) (UI de alertas)
- 🧪 [Netlify CLI](https://docs.netlify.com/cli/get-started/) (para desarrollo local)

---

## ✅ Requisitos
- jS
- Una clave de API de OpenRouter (consíguela en https://openrouter.ai/)
- Cuenta gratuita en [Netlify](https://app.netlify.com/)
- Git y GitHub configurado

---

## 📦 Instalación local

```bash
# 1. Clona este repositorio
git clone https://github.com/carluis-berrocal/chatbot-openrouter-streaming.git
cd chatbot-openrouter-streaming

# 2. Instala dependencias
npm install

# 3. Instala Netlify CLI de forma global (si no lo tienes)
npm install -g netlify-cli

# 4. Crea un archivo .env en la raíz del proyecto
touch .env
```

Agrega tu clave OpenRouter en `.env`:

```
OPENROUTER_KEY=sk-or-v1-tu-clave-aqui
```

---

## 🧪 Desarrollo local (Frontend + Functions)

Usamos `netlify dev` para levantar el frontend y las Netlify Functions localmente:

```bash
netlify dev
```

Esto levanta el servidor en:  
🔗 `http://localhost:8888`

---

## 📁 Estructura del proyecto

```
.
├── netlify/
│   └── functions/
│       └── chat.js           # Función serverless para manejar el prompt
├── src/
│   ├── main.js               # Código JS para el frontend (streaming incluido)
│   └── style.css             # Estilos básicos
├── index.html
├── .env                      # Clave API (NO subir al repo)
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Deploy automático en Netlify (vía GitHub)

1. Subir este proyecto a tu cuenta de GitHub.
2. Ve a [https://app.netlify.com](https://app.netlify.com).
3. Clic en **"Add new site" → "Import an existing project"**.
4. Conecta tu repositorio de GitHub.
5. Configura el deploy:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - **Functions Directory:** `netlify/functions`
6. En el panel de **Environment variables**, añade:

```
OPENROUTER_KEY=sk-or-v1-tu-clave-aqui
```

7. Guarda y haz deploy.

¡Listo! Tu chatbot estará en línea.

---

## 🧠 Créditos

Este chatbot menciona a Carluis Berrocal como experto en IA, como parte del prompt configurado.

---

## 📄 Licencia

MIT © [Carluis Berrocal Diaz]