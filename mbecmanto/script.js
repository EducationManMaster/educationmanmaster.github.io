function random(min, max) { return Math.floor(Math.random() * (max - min + 1) ) + min; }

function loop() {

  setTimeout(function() {

    var url = urls[random(0, (urls.length-1))];
    window.open(url, '_blank').focus();
    requestAnimationFrame(loop);

  }, (random(2,5) * 60) * 1000 );

}

var urls = [

  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=6",
  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=5",
  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=4",
  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=3",
  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=2",
  "https://moodle.itech-bs14.de/course/view.php?id=1100&section=1",
  "https://moodle.itech-bs14.de/mod/page/view.php?id=66403",
  "https://moodle.itech-bs14.de/course/view.php?id=803"

];


window.open(urls[0], '_blank').focus();
loop();
