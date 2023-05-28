const TIME_OUT = 600 // It should be the same transition time of the sections
const body = document.querySelector('body')
const sectionsQty = document.querySelectorAll('section').length
const sectionStick = document.querySelector('.section-stick')
let startFlag = true
let initialScroll = window.scrollY
let qty = 1,
  main = null,
  next = null
// Add child elements in .section-stick as number of sections exist
Array(sectionsQty)
  .fill()
  .forEach(() => {
    sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick"></div>'
  })
console.log('SLIDE', qty)
// Listening to scroll event
window.onscroll = () => {
  if (startFlag) {
    const scrollDown = this.scrollY >= initialScroll
    const scrollLimit = qty >= 1 && qty <= sectionsQty
    // Verify that the scroll does not exceed the number of sections
    if (scrollLimit) {
      body.style.overflowY = 'hidden' // Lock el scroll
      if (scrollDown && qty < sectionsQty) {
        main = document.querySelector(`section.s${qty}`)
        next = document.querySelector(`section.s${qty + 1}`)
        main.style.transform = 'translateY(-100vh)'
        next.style.transform = 'translateY(0)'
        qty++
      } else if (!scrollDown && qty > 1) {
        main = document.querySelector(`section.s${qty - 1}`)
        next = document.querySelector(`section.s${qty}`)
        main.style.transform = 'translateY(0)'
        next.style.transform = 'translateY(100vh)'
        qty--
      }
      document.addEventListener("DOMContentLoaded", () => {
        fadin('.fade')
      });
      // Scroll progressbar
      const active = document.querySelector('.section-stick .stick.active')
      active.style.top = (62 + 30) * (qty - 1) + 'px'
    }
    console.log('SLIDE', qty)
    // Wait for the scrolling to finish to reset the values
    setTimeout(() => {
      initialScroll = this.scrollY
      startFlag = true
      body.style.overflowY = 'scroll' // Unlock scroll
    }, TIME_OUT)
    startFlag = false
  }
  // Keep scrollbar in the middle of the viewport
  window.scroll(0, window.screen.height)
}

// ---------------------------  Effects  ---------------------------

// Variables & Constants
const seccion_2 = document.getElementById('seccion_2');
const seccion_3 = document.getElementById('seccion_3');
const seccion_4 = document.getElementById('seccion_4');
const seccion_5 = document.getElementById('seccion_5');
const seccion_6 = document.getElementById('seccion_6');
const seccion_7 = document.getElementById('seccion_7');
const seccion_8 = document.getElementById('seccion_8');




const cargarImagen = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          entrada.target.classList.add('visible');}
        else{
          entrada.target.classList.remove('visible');
        }
        })
      }


const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});

observador.observe(seccion_2);
observador.observe(seccion_3);
observador.observe(seccion_4);
observador.observe(seccion_5);
observador.observe(seccion_6);
observador.observe(seccion_7);
observador.observe(seccion_8);
