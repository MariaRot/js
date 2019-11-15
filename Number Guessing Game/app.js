var inputNumber = document.getElementById('number'),
  form = document.querySelector('form'),
  maxNumber = 100,
  generatedNumber = Math.ceil(Math.random() * maxNumber);

  document.getElementById('legend').innerHTML =  maxNumber;

function reset() {
  location.reload();
}


console.log(generatedNumber);
form.addEventListener('submit', function(e) {
  var userNumber = inputNumber.value || 0;
  
  if (userNumber > generatedNumber) {
    alert('Numarul este prea mare :(');
  } else if (userNumber < generatedNumber) {
    alert('Numarul este prea mic :( ');
  } else {
    alert('Felicitari! Ai ghicit! :)');
    location.reload();
  }


  e.preventDefault();
}, false);

var timeleft = 100;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = "Mai ai " + timeleft + " secunde" ;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    alert('Ai pierdut! :(');
    location.reload();
  }
}, 1000);