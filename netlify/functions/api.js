export default async (req, context) => {
  const allowedOrigins = [
    "https://aicarluis.netlify.app", // producción
    "http://localhost:8888"          // desarrollo local
  ]

  const origin = req.headers.get("origin") || req.headers.get("referer") || ""
  const isAllowed = allowedOrigins.some(o => origin.startsWith(o))

  if (!isAllowed) {
    return new Response(JSON.stringify({ error: "Acceso no autorizado" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
    })
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método no permitido" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
    })
  }

  try {
    const apiKey = process.env.OPENROUTER_KEY

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key no configurada" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
      })
    }

    const encodedKey = Buffer.from(apiKey).toString("base64")

    return new Response(JSON.stringify({ apiKey: encodedKey }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin
        }
    })
  } catch (err) {
    console.error("Error en api.js:", err)
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
