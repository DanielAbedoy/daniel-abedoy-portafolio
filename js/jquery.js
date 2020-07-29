$(() => {
  
  $("#play_vivorita").on("click", function () {
    $("#vivorita_p5").removeClass("show-infixed");
    $("#vivorita_p5").addClass("show-fixed");
  });

  $("#btn_salir_game").on("click", function () {
    $("#vivorita_p5").addClass("show-infixed");
    $("#vivorita_p5").removeClass("show-fixed");
  });



  $("#nav-toggle").on("click", function () {
    const nav = $("nav");

    if (nav[0].className === "nav-toggle-open") {
      nav.children("ul").removeClass("ul-open");
      nav.removeClass('nav-toggle-open');
      nav.css("display", "none");
      
    } else {
      nav.children("ul").addClass("ul-open");
      nav.addClass('nav-toggle-open');
      nav.slideDown('slow');
    }

  })


  $("nav").children("ul").children("li").on("click", function () {
    const nav = $("nav");
    if (nav[0].className === "nav-toggle-open") { 
      nav.children("ul").removeClass("ul-open");
      nav.removeClass('nav-toggle-open');
      nav.css("display", "none");
    }
  });

  

})
