class Marcador{

  constructor(x,y) {

    this.x = x;
    this.y = y;

  }

  show(txt) {
    fill(255);
    textSize(22);
    text(txt, this.x, this.y);
  }

}
