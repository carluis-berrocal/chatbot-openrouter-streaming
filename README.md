# 🤖 Chatbot IA con OpenRouter + Vite + Netlify Functions

Este es un chatbot web que utiliza la API de [OpenRouter](https://openrouter.ai) para responder preguntas con texto en streaming, simulando una conversación en tiempo real.  
El frontend está construido con **Vite**, y el backend usa **Netlify Functions** para mantener segura la clave de API (codificada en Base64 y accesible solo desde tu frontend autorizado).

---

## 🚀 Tecnologías utilizadas

- ⚡ [Vite](https://vitejs.dev/) – Frontend ultrarrápido
- 🧠 [OpenRouter API](https://openrouter.ai/) – Acceso a múltiples modelos de IA
- ☁️ [Netlify Functions](https://docs.netlify.com/functions/overview/) – Backend sin servidor
- 💬 [ai-sdk (streamText)](https://sdk.ai-jsx.com/docs/stream-text) – Streaming en tiempo real
- 🎨 [SweetAlert2](https://sweetalert2.github.io/) – Alertas amigables
- 🔐 Codificación de clave API en Base64 para mayor seguridad
- 🧪 [Netlify CLI](https://docs.netlify.com/cli/get-started/) – Desarrollo local

---

## ✅ Requisitos

- Conocimientos básicos de JavaScript
- Una clave API válida de [OpenRouter](https://openrouter.ai/)
- Cuenta gratuita en [Netlify](https://app.netlify.com/)
- Git y GitHub configurados

---

## 📦 Instalación local

```bash
# 1. Clona este repositorio
git clone https://github.com/carluis-berrocal/chatbot-openrouter-streaming.git
cd chatbot-openrouter-streaming

# 2. Instala las dependencias
npm install

# 3. Instala Netlify CLI si no la tienes
npm install -g netlify-cli
```

### 🔑 Configura tu archivo `.env`

Crea un archivo `.env` en la raíz del proyecto (puedes hacerlo manualmente) y dentro coloca:

```
OPENROUTER_KEY=sk-or-v1-tu-clave-aqui
```

> ⚠️ Este archivo **no debe subirse a GitHub**.

---

## 🧪 Desarrollo local (Frontend + Backend)

Ejecuta el proyecto localmente con Netlify Functions integradas:

```bash
netlify dev
```

Esto levanta la app en:  
🔗 `http://localhost:8888`

---

## 🔐 Seguridad implementada

- **Restricción por origen (CORS)**: Solo se permite el frontend autorizado (`localhost` o tu dominio Netlify).
- **Codificación base64 de la API Key**: La función `api.js` devuelve la clave codificada.
- **Separación lógica**: El archivo `auth.js` obtiene la clave una única vez al cargar y `app.js` la decodifica cuando se necesita.

---

## 📁 Estructura del proyecto

```
.
├── netlify/
│   └── functions/
│       └── api.js           # Función protegida que devuelve la API key en base64
├── src/
│   ├── app.js               # Lógica del chatbot (streamText)
│   ├── auth.js              # Obtiene la API key solo una vez
│   ├── style.css            # Estilos básicos
├── index.html
├── .env                     # Clave API (NO subir al repo)
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Deploy automático en Netlify

1. Sube este proyecto a tu cuenta de GitHub.
2. Ve a [https://app.netlify.com](https://app.netlify.com).
3. Clic en **"Add new site" → "Import an existing project"**.
4. Selecciona tu repositorio.
5. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
6. En **Site settings → Environment variables**, añade:

```
OPENROUTER_KEY=sk-or-v1-tu-clave-aqui
```

7. Guarda los cambios y haz deploy.

¡Listo! Tu chatbot estará en producción.

---

## 🧠 Créditos

Este chatbot está configurado para responder como si **Carluis Berrocal**, Ingeniero de Sistemas y experto en Inteligencia Artificial, fuera quien responde.  
Ideal para proyectos personales, portafolios o experimentos IA.

---

## 📄 Licencia

MIT © [Carluis Berrocal Diaz](https://github.com/carluis-berrocal)