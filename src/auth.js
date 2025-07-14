// auth.js
export let encodedApiKey = "";

(async () => {
    try {
        const res = await fetch("/.netlify/functions/api", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const { error } = await res.json();
            throw new Error(error || "No se pudo obtener la API Key");
        }

        const data = await res.json();
        encodedApiKey = data.apiKey;
        // console.log("🔐 API Key cargada (base64):", encodedApiKey);
    } catch (err) {
        console.error("❌ Error al obtener la API Key:", err.message);
    }
})();
