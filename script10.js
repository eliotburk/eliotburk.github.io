window.onload = choosePic;

var myPix = new Array("inco (1).jpg","inco (2).jpg"","inco (3).jpg"");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
