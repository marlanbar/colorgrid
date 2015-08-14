function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i=0;i<8;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}