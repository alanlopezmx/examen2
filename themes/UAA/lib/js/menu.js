var btnMenu = document.getElementById("menu_boton");
var nav = document.getElementById("menu_movil");

btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});
document.onclick = function (e) {
 e = e || event
 var target = e.target || e.srcElement
 var boton = document.getElementById('menu_boton');
 var elemento = document.getElementById('menu_movil');
 do {
  if (elemento == target || boton == target) {

   // El click se ha producido dentro del elemento, no se hace nada.
   return;
  }
  target = target.parentNode;
 } while (target)
 // Se ha clicado fuera del elemento, se realiza una acción.
   elemento.classList.remove('mostrar');

}
