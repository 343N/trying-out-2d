function Player(x, y) {
    this.dx = window.innerWidth / 2;
    this.dy = window.innerHeight / 2;
    this.az = 0;
    this.ax = 0;
    this.ay = 0;
    this.ang = 0;
    this.pSize = 10;
    this.col = "#000000";
    this.speed = 10;

    this.move = function(s){
      // this.ay += Math.cos(this.ang);
      // this.ax += Math.sin(-this.ang);

      this.ax += (this.speed *s) * Math.sin(this.ang);
      this.ay += (this.speed*s) * Math.cos(this.ang);
    }


    this.rotate = function(d){
      this.ang += (d*Math.PI/180);
    }


    this.setColor = function(col){
      this.colpr = col;
    }

    this.render = function(){
      var dx1 = this.dx - this.pSize / 2;
      var dy1 = this.dy - this.pSize / 2;
      ctx.beginPath()
      ctx.rect(dx1, dy1, this.pSize, this.pSize);
      ctx.fillStyle = this.col;
      ctx.fillRect(dx1, dy1, this.pSize, this.pSize);
      // ctx.strokeStyle = this.col;

      ctx.fillStyle = "black";
      ctx.fillText("Player pos:\n " + Math.floor(this.ax) + " X, " + Math.floor(this.ay) + " Y", dx1, dy1);
      ctx.stroke();
    }
}
