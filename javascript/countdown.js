var countDownDate = new Date("Jul 15, 2023 15:37:25").getTime();
console.log(countDownDate);

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Ne-am casatorit!";
  }
}, 1000);