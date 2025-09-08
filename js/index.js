var timer = new easytimer.Timer();


$('#countdownExample .values').html('02:00');

var timerRunning = false;

$('.startButton').click(function () {
  if (!timerRunning) {
    timer.start({countdown: true, startValues: {minutes : 2}});
    timerRunning = true;
    $(this).text('Reset');
  } else {
    timer.reset();
    $('#countdownExample .values').html('02:00');
    timer.pause();
    timerRunning = false;
    $(this).text('Start');
  }
});



timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
});

timer.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('GG');
    timerRunning = false;
    $('.startButton').text('Start');
});