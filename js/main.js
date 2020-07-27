///Hacer elmenu fixed

scroling = () => {
  const nav = document.getElementById("nav-bar");
  const slogan = document.getElementById("slogan");
  const main = document.getElementById("main");
  if (window.pageYOffset > slogan.offsetTop +200) {
    nav.classList.add("pegar-nav");
    main.classList.add("m-main");
  } else {
    nav.classList.remove("pegar-nav");
    main.classList.remove("m-main");
  }
}

window.onscroll = () => scroling();
