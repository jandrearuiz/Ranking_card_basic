// para llamar clases
let links = document.querySelectorAll(".close");
// para recorrer clases
links.forEach(function(link) {
// para aplicar un evento
  link.addEventListener("click", function(ev){
    ev.preventDefault();

    let content = document.querySelector('.cars');

    setTimeout(function(){
      location.href = "/";
    },600);
  })
});

/* para quitar las clases
let iconos = document.querySelectorAll("i"):

iconos.forEach(function(icono) {
  icono.classList.remove("fa-star")
});

o classList.add para agregar clases
setTimeout : una vez después de cierto tiempo
setInterval : más de una vez
*/
