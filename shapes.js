function Rectangle(x, y, x2, y2, id) {

    //centerpoint x/y
    this.x1 = x;
    this.y1 = y;
    this.id = id;
    //width/height in BOTH directions (i.e halved);
    this.width = x2 / 2;
    this.height = y2 / 2;
    this.ctc = Math.sqrt((this.width*this.width) + (this.height*this.height));
    this.inFrustrum = true;
    this.col = "#BDBDBD";
    this.ang = 0;

    this.debug = false;

    this.setDebug = function(d){
      this.debug = d;
    }
    // this.width = 0assssssssss;

    this.setColor = function(col){
      this.col = col;
    }
    this.getColor = function(){

      return this.col;
    }



    this.render = function(player){
      var dx = (player.ax - this.x1) - (this.width);
      // console.log(dx);
      var dy = (player.ay - this.y1) - (this.height);
      // console.log(dy);
      // console.log((dx + this.width + this.ctc < -player.dx));
      // console.log((dy + this.height + this.ctc < -player.dy));
      // console.log((dx - this.width - this.ctc > player.dx));
      // console.log((dy - this.height - this.ctc > player.dy));

      if (this.debug) {
        console.log(dx + " X - " + dy + " Y")

        console.log(dx);
        console.log(dy);
        console.log(this.width);
        console.log(this.height);
        console.log(this.ctc);
        console.log(((dx + this.width + this.ctc < -player.dx
          && dy + this.height + this.ctc < -player.dy) ||
          (dx - this.width - this.ctc > player.dx
          && dy - this.height - this.ctc > player.dy)));

          console.log((dx + this.width + this.ctc < -player.dx));
          console.log((dx - this.width - this.ctc > player.dx));
          console.log((dy - this.height - this.ctc > player.dy))

          console.log((dy + this.height + this.ctc < -player.dy))




      }
      if(dx + (this.width*2) < -(vCTC/2)
        || dy + (this.height*2) < -(vCTC/2)
        || dx > vCTC/2
        || dy > vCTC/2){
        this.inFrustrum = false;
        // console.log("Culled "+ this.id +" @ " + dx + " X, " + dy + " Y.");
      } else this.inFrustrum = true;

      var rAngle = player.ang - this.ang;

      ctx.save();
      ctx.translate(player.dx, player.dy);
      ctx.rotate(rAngle);

      if(this.inFrustrum){
        ctx.rect(dx, dy, this.width*2, this.height*2);

        ctx.fillStyle = this.col;
        ctx.fillRect(dx, dy, this.width*2, this.height*2);



        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fillText(this.id + " pos: " + Math.floor(this.x1) + " X, " + Math.floor(this.y1) + " Y", dx, dy - 10);
      }
      ctx.restore();
    }
}

function Line(x, y, x2, y2) {

    this.x1 = x;
    this.y1 = y;

    this.setColor = function(col){
      this.col = col;
    }

    this.getColor = function(){
      return this.col;
    }
}
