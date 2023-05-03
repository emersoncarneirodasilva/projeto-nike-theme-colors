const body = document.querySelector("body");
const changeThemeBtn = document.querySelector("#change-theme");

// Função que muda para dark mode
function toggleDarkMode() {
  body.classList.toggle("dark");
}

// Função que alterna o modo
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", () => {
  toggleDarkMode();

  // Salva ou remove o dark mode
  localStorage.removeItem("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "Modo dark on!");
  }
});

// Mudança de cor
const colorBox = document.querySelector(".color-box");
const iconPalette = document.querySelector(".change-mode .bi-palette");

// Pegando os botões
const root = document.querySelector(":root");
const buttons = document.querySelectorAll(".btn-colors");

iconPalette.addEventListener("click", () => {
  colorBox.classList.toggle("open");
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    const open = document.querySelector(".open");
    // OBS: A variável "open", aqui, serve para fechar o botão assim que escolhido uma cor
    if (open) {
      open.classList.remove("open");
    }

    const active = document.querySelector(".active");
    active.classList.remove("active");

    target.classList.add("active");

    // Trocar de cores
    const dataColor = target.getAttribute("data-color");
    const color = dataColor.split(" ");

    root.style.setProperty("--light-color", color[0]);
    root.style.setProperty("--white-color", color[1]);
    root.style.setProperty("--box-color", color[2]);
    root.style.setProperty("--btn-color", color[3]);
  });
});
