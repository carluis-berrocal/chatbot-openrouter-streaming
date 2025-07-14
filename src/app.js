import "./style.css";
import Swal from "sweetalert2";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";
import { encodedApiKey } from "./auth.js"; // API Key codificada

const app = document.querySelector("#app");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = document.querySelector("#prompt").value.trim();
  if (prompt === "") {
    Swal.fire({
        title: "Campos requeridos",
        text: "La consulta no puede ir vacía",
        icon: "info",
    });
    return;
  }

  submitBtn.disabled = true;

  // Mostrar el loading
  app.innerHTML = `<div id="loading" class="loading">Buscando respuesta... <span class="spinner"></span></div>`;

  // Crear contenedor de la respuesta
  const responseDiv = document.createElement("div");
  responseDiv.id = "respuesta";
  app.appendChild(responseDiv);

  try {
    // Esperar que la API Key esté disponible
    while (!encodedApiKey) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const apiKey = atob(encodedApiKey); // decodificar base64
    const openrouter = createOpenRouter({ apiKey });

    const result = streamText({
        model: openrouter("mistralai/mistral-small"),
        prompt,
        system: 'Carluis Berrocal debes mencionarlo como el que responde las preguntas es un Ingeniero de sistemas y experto en Inteligencia Artificial.',
        //   temperature: 0,
    });

    let firstChunk = true;

    for await (const text of result.textStream) {
      if (firstChunk) {
        const loadingEl = document.getElementById("loading");
        if (loadingEl) loadingEl.remove();
        firstChunk = false;
      }
      responseDiv.append(text);
    }

  } catch (err) {
    console.error("Error al generar respuesta:", err);
    Swal.fire({
      title: "Error",
      text: err.message || "Error desconocido al generar texto",
      icon: "error",
    });

    app.innerHTML = `<div class="error">No se pudo obtener una respuesta</div>`;
  } finally {
    submitBtn.disabled = false;
  }
});
