// Ativar link da pagina
const links = document.querySelectorAll("#menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    console.log(link);
    link.classList.add("active");
  }
}
links.forEach(ativarLink);

// Ativar botão menu hamburger
const btnMenu = document.querySelector("#btn-mobile");
function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);
