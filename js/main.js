///Hacer elmenu fixed
scroling = () => {

  //Active
  const inicio_ = document.getElementById("inicio");
  const sobre_me_ = document.getElementById("sobre-me");
  const conocimientos_ = document.getElementById("conocimientos");
  const proyectos_ = document.getElementById("proyectos");
  const contactame_ = document.getElementById("contactame");

  const inicio = document.getElementById("li-inicio");
  const sobre_me = document.getElementById("li-sobre-me");
  const conocimientos = document.getElementById("li-conocimientos");
  const proyectos = document.getElementById("li-proyectos");
  const contactame = document.getElementById("li-contactame");

  const inicio_a = document.getElementById("a-inicio");
  const sobre_me_a = document.getElementById("a-sobre-me");
  const conocimientos_a = document.getElementById("a-conocimientos");
  const proyectos_a = document.getElementById("a-proyectos");
  const contactame_a = document.getElementById("a-contactame");

  if (window.pageYOffset > contactame_.offsetTop - 100) {
    proyectos.classList.remove("active-item");
    inicio.classList.remove("active-item");
    conocimientos.classList.remove("active-item");
    sobre_me.classList.remove("active-item");

    contactame.classList.add("active-item");
    contactame_a.classList.add("active-item");

    proyectos_a.classList.remove("active-item");
    inicio_a.classList.remove("active-item");
    conocimientos_a.classList.remove("active-item");
    sobre_me_a.classList.remove("active-item");
  }else if (window.pageYOffset > proyectos_.offsetTop -150) {
    proyectos.classList.add("active-item");
    inicio.classList.remove("active-item");
    conocimientos.classList.remove("active-item");
    sobre_me.classList.remove("active-item");
    
    contactame.classList.remove("active-item");
    contactame_a.classList.remove("active-item");

    proyectos_a.classList.add("active-item");
    inicio_a.classList.remove("active-item");
    conocimientos_a.classList.remove("active-item");
    sobre_me_a.classList.remove("active-item");
    

  } else if (window.pageYOffset > conocimientos_.offsetTop -150 ) {
    proyectos.classList.remove("active-item");
    inicio.classList.remove("active-item");
    conocimientos.classList.add("active-item");
    sobre_me.classList.remove("active-item");

    contactame.classList.remove("active-item");
    contactame_a.classList.remove("active-item");

    proyectos_a.classList.remove("active-item");
    inicio_a.classList.remove("active-item");
    conocimientos_a.classList.add("active-item");
    sobre_me_a.classList.remove("active-item");

  } else if (window.pageYOffset > sobre_me_.offsetTop + 100) {
    proyectos.classList.remove("active-item");
    inicio.classList.remove("active-item");
    conocimientos.classList.remove("active-item");
    sobre_me.classList.add("active-item");

    contactame.classList.remove("active-item");
    contactame_a.classList.remove("active-item");

    proyectos_a.classList.remove("active-item");
    inicio_a.classList.remove("active-item");
    conocimientos_a.classList.remove("active-item");
    sobre_me_a.classList.add("active-item");

  } else if (window.pageYOffset > inicio_.offsetTop - 200) {
    proyectos.classList.remove("active-item");
    inicio.classList.add("active-item");
    conocimientos.classList.remove("active-item");
    sobre_me.classList.remove("active-item");

    contactame.classList.remove("active-item");
    contactame_a.classList.remove("active-item");

    proyectos_a.classList.remove("active-item");
    inicio_a.classList.add("active-item");
    conocimientos_a.classList.remove("active-item");
    sobre_me_a.classList.remove("active-item");
  }

  if (screen.width < 502) return;
  const nav = document.getElementById("nav-bar");
  const slogan = document.getElementById("slogan");
  const main = document.getElementById("main");
  if (window.pageYOffset > slogan.offsetTop + 110) {
    nav.classList.add("pegar-nav");
  } else {
    nav.classList.remove("pegar-nav");
  }
}



window.onscroll = () => scroling();

