function introAnimete() {
  const target = document.querySelectorAll('[data-anime]')
  const animationClass = 'animate'
  if (target.length) {
    function activeAminate(elemento) {
      elemento.classList.add(animationClass)
    }
    target.forEach(activeAminate)
  }
}
introAnimete()