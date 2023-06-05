const title_s1 = document.getElementById('title_s1');
const text_1_s1 = document.getElementById('text_1_s1');
const title_s2 = document.getElementById('title_s2');
const text_1_s2 = document.getElementById('text_1_s2');
const text_2_s2 = document.getElementById('text_2_s2');
const title_s3 = document.getElementById('title_s3');
const text_1_s3 = document.getElementById('text_1_s3');
const title_s4 = document.getElementById('title_s4');
const text_1_s4 = document.getElementById('text_1_s4');
const title_s5 = document.getElementById('title_s5');
const text_1_s5 = document.getElementById('text_1_s5');
const title_s6 = document.getElementById('title_s6');
const text_1_s6 = document.getElementById('text_1_s6');
const title_s7 = document.getElementById('title_s7');
const text_1_s7 = document.getElementById('text_1_s7');
const text_2_s7 = document.getElementById('text_2_s7');


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

observador.observe(title_s1);
observador.observe(text_1_s1);
observador.observe(title_s2);
observador.observe(text_1_s2);
observador.observe(text_2_s2);
observador.observe(title_s3);
observador.observe(text_1_s3);
observador.observe(title_s4);
observador.observe(text_1_s4);
observador.observe(title_s5);
observador.observe(text_1_s5);
observador.observe(title_s6);
observador.observe(text_1_s6);
observador.observe(title_s7);
observador.observe(text_1_s7);
observador.observe(text_2_s7);