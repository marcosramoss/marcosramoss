function ativarLink () {
  const links = document.querySelectorAll('nav a')
  function ativarLink(link) {
      const url = location.href
      const href = link.href
      if (url === href) {
          link.classList.add('ativo')
      }
  }
  links.forEach(ativarLink)
}
ativarLink()