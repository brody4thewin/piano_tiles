var buttonAppear = function() {
  var randomNumber = Math.floor(Math.random()*8);

  document.getElementById(randomNumber).innerHTML="<button onclick='next()'>Press Me</button>"
}