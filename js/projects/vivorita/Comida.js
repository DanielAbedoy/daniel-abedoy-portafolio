class Comida{

  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  }

  show() {
    fill(255,0,0);
    stroke(255, 255, 255);
    strokeWeight(2);
    rect(this.x,this.y,this.w,this.w);
  }

  eter(x, y) {
    
    if (x < (this.x + 20) && x > (this.x - 20) ) {
      if (y < (this.y + 20) && y > (this.y - 20)) { 
        this.x = random(1, 58) * 10;
        this.y = random(1, 48) * 10;
        return true;
      }
    }
    return false;
  }

}
