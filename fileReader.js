function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    contents = contents.split("\n");
    displayContents(contents[0]);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);


function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i=0;i<8;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}