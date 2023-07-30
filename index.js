var randomNum = Math.floor(Math.random()*6)+1;
var randomImg = "dice" + randomNum + ".png";
var randomImgSrc = "images/"+randomImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSrc);




var randomNum1 = Math.floor(Math.random()*6)+1;
var randomImg1 = "dice" + randomNum1 + ".png";
var randomImgSrc1 = "images/"+randomImg1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSrc1);

if(randomNum > randomNum1){
    document.querySelector("#res").innerHTML = "Player 1 WINS";
}
else if(randomNum1 > randomNum){
    document.querySelector("#res").innerHTML = "Player 2 WINS";
}
else{
    document.querySelector("#res").innerHTML = "DRAW!";
}