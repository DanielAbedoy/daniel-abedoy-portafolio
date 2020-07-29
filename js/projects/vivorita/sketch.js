let vivorita;
let cuerpo = [];
let direction;
let comida;
let marcador;
let puntuacion;
let start;

function setup() {
  createCanvas(600, 500);
  frameRate(7);
  direction = "right";
  puntuacion = 0;
  start = false;

  vivorita = new Vivora(160, 100, 20, 240);

  for (let i = 0; i < 6; i++) {
    cuerpo.push(new Vivora(140 - (i * 20), 100, 20, 55));
  }

  comida = new Comida((random(1, 58) * 10), (random(1, 48) * 10), 20);
  
  marcador = new Marcador(10,40);
}

function move_body(){

  for (let i = cuerpo.length -1; i > 0; i--) {
    cuerpo[i].body_move(cuerpo[i-1].x,cuerpo[i-1].y);
  }
  cuerpo[0].body_move(vivorita.x,vivorita.y);
}

function die() {
  cuerpo.forEach(function (c) {
    if (c.x === vivorita.x && c.y === vivorita.y) {
      
      fill(255);
      textSize(72);
      text("¡ Game Over !", 80,220);
      noLoop();

    }
  })
}

function draw() {
  background(0, 0, 0);

  if (!start) {
    fill(255);
      textSize(72);
    text("¡ Enter to Play !", 45, 220);
    return;
  }

  die();
  move_body();
  

  vivorita.show();
  vivorita.boundary();
  vivorita.move(direction);

  cuerpo.forEach(function (c) {
    c.show();
  });

  comida.show();
  if (comida.eter(vivorita.x, vivorita.y)) {
    
    cuerpo.push(new Vivora(cuerpo[cuerpo.length - 1].x, cuerpo[cuerpo.length - 1].y, 20, 55));
    puntuacion += 1;
  }

  marcador.show("Puntuacion: " + puntuacion);
}

function keyPressed() {

  if (keyCode === 13) {
    start = true;
  }

  if (keyCode === LEFT_ARROW) {
    if (direction === "right") return;
    direction = "left";
  }
  if (keyCode === RIGHT_ARROW) {
    if (direction === "left") return;
    direction = "right";
  }
  if (keyCode === UP_ARROW) {
    if (direction === "down") return;
    direction = "up";
  }
  if (keyCode === DOWN_ARROW) {
    if (direction === "up") return;
    direction = "down";
  }
  

  

}