
const themeButton = document.getElementById("theme-toggle");
const darkLink = document.createElement("link");
darkLink.rel = "stylesheet";
darkLink.href = "style_dark.css";
darkLink.id = "dark-theme";

// verifica se o usuário já tinha escolhido
if (localStorage.getItem("theme") === "dark") {
    document.head.appendChild(darkLink);
    themeButton.textContent = "☀️ Modo Claro";
}

themeButton.addEventListener("click", () => {
    const darkThemeActive = document.getElementById("dark-theme");
    if (darkThemeActive) {
        // volta para o claro
        darkThemeActive.remove();
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Modo Escuro";
    } else {
        // ativa o escuro
        document.head.appendChild(darkLink);
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Modo Claro";
    }
});
