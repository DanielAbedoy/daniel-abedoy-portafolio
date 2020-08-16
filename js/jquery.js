$(() => {
  
  $("#facebook").hover(function () {
    $(this).css("background-color","#3b5998");
    $(this).children("a").css("color","white");
  }, function () {
    $(this).css("background-color","white");
    $(this).children("a").css("color","black");
  })

  $("#whatsapp").hover(function () {
    $(this).css("background-color","#25d366");
    $(this).css("color","white");
  }, function () {
    $(this).css("background-color","white");
    $(this).css("color","black");
  })

  $("#linkedin").hover(function () {
    $(this).css("background-color","#0072b1");
    $(this).children("a").css("color","white");
  }, function () {
    $(this).css("background-color","white");
    $(this).children("a").css("color","black");
  })

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

  const mividia = '! Hola ¡ Soy José Daniel Abedoy Silva, nací el 7 de Septiembre de 1999 en la Ciudad de México. <br /> \
   <br /> \
  Desde muy pequeño me vi interesado por crear cosas, diseñarlas y experimentar con ellas, todo esto empezó con la papiroflexia, me llamaba la atención crear cosas para después jugar con ellas. Primero las imaginaba, después encontraba materiales con los cuales construir mis ideas, luego el paso final, desarrollarlas .<br />\
  <br />\
  Todo esto siguió durante toda mi corta vida, bueno, con materiales cada vez mas pesados, costosos y peligrosos.<br />\
  <br />\
  Y desde entonces sabia que yo quería dedicarme a construir cosas, diseñarlas pero sobre todo que funcionaran. Y realmente no sabia por donde comenzar, es mas ni me di cuenta cuando comencé a diseñar cosas porque lo hago con tanta pasión que ni me pongo a pensar en esas cosas.<br />\
  <br />\
  Y de algo estoy muy seguro, y también esto es un mensaje para mi yo del futuro... "Se que vamos a llegar lejos muy lejos, pero recuérdalo toda la vida...  siempre debes hacer las cosas con amor y con inteligencia y así llegaras a donde estamos ahora"<br />\
  <br />\
  Espero te haya gustado mi mensaje porque no es solo para mi.';

  $("#p-mi-vida").append(mividia);


  const mis_estudios = 'Siempre me a gustado mucho el ir a la escuela, ya sé, pocos me creerán pero los que han convivido conmigo y saben de que hablo, al final les contaré.<br/>\
  <br/>\
  Fui al Kinder "Venadito" del Estado de México donde me gustaba mucho jugar con mis compañeros ahí fue donde comencé a forjar mis conocimientos con a aprender Ingles.<br/>\
  <br/>\
Después fui a la primaria, bueno, a dos primarias, la primera era de tiempo completo y no me gustaba dejar de ver a mi mamá tanto tiempo, así que decidieron cambiarme a la primaria "Japón" de la Ciudad de México, puedo decirles con mucho gusto que lo que más aprendí de ahí fue a ser Feliz, siempre recordaré al maestro Rubén, que él fue el responsable de mi positividad.<br/>\
<br/>\
Luego en la secundaria(Sec. #147 de la CDMX) ... Bueno solo les diría que fue donde comencé diseñar cosas y a crear ya que estaba en el taller de Electrotecnia y construimos muchas cosas.<br/>\
<br/>\
En la Preparatoria fue donde desarrolle con un alto porcentaje mi nivel de Ingles ya que mi carrera como técnico que elegí fue Secretariado Ejecutivo Bilingüe en el CETIS 54 de la Ciudad de México, y no mucho más, ya que como todo joven destrampado, me gustaba irme de fiestas y disfrutar el presenta, pero no significo que deje de ser responsable, al contrario, ahí fue donde forje mis valores gracias a todos los maestros que tuve. Pero quiero resaltar en este punto a mi profesor Juan Manuel Trujillo (Mi maestro en contabilidad), él solo nos dio como 3 clases acerca de la materia, todas las demás fueron clases de "Cómo ser feliz" a el le prometí que llegaría lejos en mi carrera y en mi hobby, el día que se lo prometí me dijo... "Cuando te vuelva a ver quiero que seas todo eso" y se lo voy a cumplir.<br/>\
<br/>\
Ya en la Universidad comencé construir mi carrera, fue aquí donde empecé con el desarrollo de software, web y robótica. Antes de la universidad yo no sabia nada de programación pero mi hambre y mis ganas de aprender fueron las que me motivaron a aprender lo que sé hoy en día, y es esa hambre la que me seguirá motivando en el futuro.<br/>\
<br/>\
Y llegar a este punto de mi vida no fue nada fácil, y yo sé que muy pocos podrán decir que fue fácil, pero yo siempre he dicho... "Si fuera fácil, todos lo serian"';

  $("#p-mis-estudios").append(mis_estudios);


  const mas_de_mi = 'Mi vida no solo gira alrededor de la programación y de estudiar, también me gusta hacer otras muchísimas cosas y les contare un poco sobre ellas. \
  Desde chiquito yo me eh dedicado al deporte, primero fui futbolista, lo cual no se me dio, luego estuve dos años entrenando natación, después de eso encontré el beisbol del cual me enamore muchísimo, lamentablemente no lo seguí entrenado por muchas cuestiones, y fui ahí cunado encontré el mundo de las pesas y el culturismo, eso hoy en día es mi pasión por completo.\
  Pero hay muchas cosas más me gusta tocar la guitarra, cantar, bailar, conocer nuevos lugares a los que no he estado.\
  También me gusta crear y diseñar cosas relacionadas con la robótica.\
  Y en mi cabeza hay muchas cosas más las cuales adoro hacer pero por el momento lo dejare hasta ahí.';

  $("#p-mas-de-mi").append(mas_de_mi);
  

})
