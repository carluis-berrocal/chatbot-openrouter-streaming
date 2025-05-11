import "./style.css";
import Swal from "sweetalert2";

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
      draggable: true,
    });
    return;
  }

  submitBtn.disabled = true;
  app.innerHTML = `<div class="loading">Buscando respuesta... <span class="spinner"></span></div>`;

  try {
    const response = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      app.innerHTML = `<div class="error">Error: ${errorText}</div>`;
      return;
    }

    // Limpia el loader y prepara el espacio para el texto
    app.textContent = "";

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      app.append(decoder.decode(value));
    }
  } catch (err) {
    console.error(err);
    app.innerHTML = `<div class="error">Error de red o del servidor</div>`;
  } finally {
    submitBtn.disabled = false;
  }
});
