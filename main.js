// var c = document.getElementById("c");
// var ctx = c.getContext("2d");



var player = new Player(0, 0);
var vH = window.innerHeight;
var vW = window.innerWidth;
var renderQueue = [];

var vCTC = Math.sqrt((vH*vH) + (vW*vW));

// renderQueue.push(new Rectangle(0,0,100,100, 0));

for (var i = 0; i < 20; i++){
  renderQueue.push(new Rectangle((Math.random() * 3000) - 1500, (Math.random() * 3000) - 1500, Math.random() * 800, Math.random() * 800, i));
  renderQueue[i].setColor('#'+Math.floor(Math.random()*16777215).toString(16));

}
// renderQueue[10].setDebug(true);

window.requestAnimationFrame(renderScene);

// document.onkeydown = checkKey;


var map = {};

onkeydown = onkeyup = function(e) {
    e = e || window.event;

    map[e.keyCode] = e.type == 'keydown';
    if (map[87]) {
        // up arrow
        player.move(1);
    }
    if (map[83]) {
        // down arrow
        player.move(-1);
    }
    if (map[65]) {
        // left arrow
        // player.move(-1, 0);
        player.rotate(1);

    }
    if (map[68]) {
        // right arrow
        // player.move(1, 0);
        player.rotate(-1);
    }
}

function d2r(ass){
	return (ass*Math.PI/180);
}


function movePlayer(event){
      if (player){
        player.ang = 0;
        player.ax += (player.dx - event.pageX) //* Math.sin(player.ang);
        player.ay += (player.dy - event.pageY) //* Math.cos(player.ang);
      }
      // alert('dicks');
}

document.addEventListener("click", movePlayer);

var d = Date.now();
var dt = Date.now();
var td;

function renderScene() {

  ctx.clearRect(0, 0, c.width, c.height);

    if (d % 20 == 0) dt = Date.now() - d;
    d = Date.now();




    for (var i = 0; i < renderQueue.length; i++) {
        renderQueue[i].render(player);
        // if (Math.random() < .01){
        //   renderQueue[i].setColor('#'+Math.floor(Math.random()*16777215).toString(16));
        //   // renderQueue[i].x1 += (Math.random()*100) - 50;
        //   // renderQueue[i].y1 += (Math.random()*100) - 50;
        // }
    }

    player.render();


    ctx.fillStyle="black";
    ctx.font="20px Arial";
    ctx.fillText(Math.floor((1000/dt)*100)/100 + " FPS.", 20, 20);
    ctx.fillText(Math.floor((player.ang * 180/Math.PI)), 20, 50)
    ctx.fillText("WASD to move, goddamn.", vW/2 - 130, vH - 100);
    requestAnimationFrame(renderScene);

}
