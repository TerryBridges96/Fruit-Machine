var randomizer = document.getElementById("spin-btn");
var randImg = document.getElementById("symbol-1");
var randImg2 = document.getElementById("symbol-2");
var randImg3 = document.getElementById("symbol-3");
var iconArray = ["symbol-1.png", "symbol-2.png", "symbol-3.png", "symbol-4.png", "symbol-5.png", "symbol-6.png"];


  randomizer.addEventListener("click", function(){
    var randNum = Math.floor(Math.random() * iconArray.length) + 0  
    var randNum2 = Math.floor(Math.random() * iconArray.length) + 0  
    var randNum3 = Math.floor(Math.random() * iconArray.length) + 0  
    
    randImg.src = iconArray[randNum];
    randImg2.src = iconArray[randNum2];
    randImg3.src = iconArray[randNum3];
      
    if (randNum == randNum2 && randNum2 == randNum3 && randNum == randNum3 ) {
            var message = document.querySelector('.message').textContent = 'You have WON!!'
      } else {
            var message = document.querySelector('.message').textContent = 'You Have lost, spin again!';
      } 
  });





