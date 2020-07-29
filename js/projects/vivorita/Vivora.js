class Vivora{

  constructor(x,y,w, c) {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.c = c;
  }

  show() {
    fill(this.c);
    stroke(255, 255, 255);
    strokeWeight(2);
    rect(this.x,this.y,this.w,this.w);
  }

  move(direcction) {
    if (direcction === 'left') {
      this.x -= 20;
    }
    if (direcction === 'right') {
      this.x += 20;
    }
    if (direcction === 'up') {
      this.y -= 20;
    }
    if (direcction === 'down') {
      this.y += 20;
    }
  }


  boundary() {
    if (this.x < 0) {
      this.x = 600
    }
    if (this.x > 600) {
      this.x = -20;
    }
    if (this.y < 0) {
      this.y = 500
    }
    if (this.y > 500) {
      this.y = -20;
    }
  }


  body_move(x, y) {
    this.x = x;
    this.y = y;
  }

}

