import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { prompt } = await req.json()

    if (!prompt || prompt.trim() === '') {
      return new Response(JSON.stringify({ error: 'El prompt es requerido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const apiKey = process.env.OPENROUTER_KEY
    const openrouter = createOpenRouter({ apiKey })

    const result = await streamText({
      model: openrouter('google/gemma-3-4b-it:free'),
      prompt,
      system: 'Carluis Berrocal debes mencionarlo como el que responde las preguntas es un Ingeniero de sistemas y experto en Inteligencia Artificial.',
    })

    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.textStream) {
            controller.enqueue(encoder.encode(chunk))
          }
          controller.close()
        } catch (err) {
          controller.enqueue(encoder.encode('[Error de streaming]'))
          controller.close()
        }
      }
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    })

  } catch (err) {
    console.error(err)
    return new Response('[Error interno]', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}
