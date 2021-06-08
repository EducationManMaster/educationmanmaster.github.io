// Preise in €
var festpreis = 1.0;
var proMinute = 0.17;
var proKilometer = 0.51;



function option(id) {

  document.getElementById(id).className = "option option_aktiv";

  switch (id) {

    case "opt1":

      document.getElementById("opt2").className = "option";

      document.getElementById("dauer").className = "s3";
      document.getElementById("strecke").className = "s1";

    break;

    case "opt2":

      document.getElementById("opt1").className = "option";

      document.getElementById("dauer").className = "s2";
      document.getElementById("strecke").className = "s0";

    break;

  }

}

function setRange(value) { document.getElementById("streckenangabe").innerHTML = value + "km" }

function streckeBerechnen() {

  var streckeKM = document.getElementById("streckenSlider").value;

  var endpreis = (streckeKM * proKilometer) + festpreis;
  endpreis = endpreis.toFixed(2);

  document.getElementById("preis").innerHTML = endpreis + "€"

  zufallsSound();

}

function dauerBerechnen() {

  var von = document.getElementById("timeVON").value;
  var bis = document.getElementById("timeBIS").value;

  von = von.split(":");
  bis = bis.split(":");

  var std = bis[0] - von[0];
  var min = bis[1] - von[1];

  if(std < 0){ std = 24 + std; }

  var zeit = (std * 60) + min;

  var endpreis = (proMinute * zeit) + festpreis;
  endpreis = endpreis.toFixed(2);

  document.getElementById("preis").innerHTML = endpreis + "€"

  zufallsSound();

}

function zufallsSound() {

  var zufall = Math.floor(Math.random() * 1001);

  console.log(zufall);

  if(zufall == 500){

    var audio = new Audio('data/sound.mp3');
    audio.play();

  }

}
