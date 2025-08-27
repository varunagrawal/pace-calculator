function calculateTimes() {
  $('#raceTimeTable').hide();
  $('#intervalPaceTable').hide();
  $('#trainingPaceTable').hide();

  var seconds = 0;

  // Get the values, default to 0 if empty
  var hours = $("#hours").val() || 0;
  var minutes = $("#minutes").val() || 0;
  var secondsTemp = $("#seconds"  ).val() || 0;
  seconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + (parseInt(secondsTemp));
  var event = $('#distance').val();
  if (event == "Mile") {
    seconds = seconds * 3.39;
  }
  else if (event == "3k") {
    seconds = seconds * 1.716;
  }
  else if (event == "10k") {
    seconds = seconds / 2.1;
  }
  else if (event == "Half Marathon") {
    seconds = seconds / 4.738;
  }

  $('#MileRaceTime').text(convertSecondsToTime(seconds / 3.39));
  $('#MileRacePace').text(convertSecondsToTime(seconds / 3.39));
  $('#3kRaceTime').text(convertSecondsToTime(seconds / 1.716));
  $('#3kRacePace').text(convertSecondsToTime(seconds / 1.716 / 1.87));
  $('#5kRaceTime').text(convertSecondsToTime(seconds));
  $('#5kRacePace').text(convertSecondsToTime(seconds / 3.106));
  $('#10kRaceTime').text(convertSecondsToTime(seconds * 2.098));
  $('#10kRacePace').text(convertSecondsToTime(seconds * 2.098 / 6.2));
  $('#HalfRaceTime').text(convertSecondsToTime(seconds * 4.7));
  $('#HalfRacePace').text(convertSecondsToTime(seconds * 4.7 / 13.1));
  $('#FullRaceTime').text(convertSecondsToTime(seconds * 9.94));
  $('#FullRacePace').text(convertSecondsToTime(seconds * 9.94 / 26.2));
  $('#ModeratePaceMin').text(convertSecondsToTime(seconds / 3.106 + 60));
  $('#ModeratePaceMax').text(convertSecondsToTime(seconds / 3.106 + 80));
  $('#EasyPaceMin').text(convertSecondsToTime(seconds / 3.106 + 120));
  $('#EasyPaceMax').text(convertSecondsToTime(seconds / 3.106 + 150));
  $('#RecoveryPaceMin').text(convertSecondsToTime(seconds / 3.106 + 160));
  $('#RecoveryPaceMax').text(convertSecondsToTime(seconds / 3.106 + 200));
  if ((seconds / 3.106) < 490) {
    $('#MileIntervalPace').text(convertSecondsToTime(seconds / 3.106 + 12));
    $('#MileIntervalTime').text(convertSecondsToTime(seconds / 3.106 + 12));
    $('#TwelveHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 + 10));
    $('#TwelveHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 + 10) * .75));
    $('#ThousandIntervalPace').text(convertSecondsToTime(seconds / 3.106 + 10));
    $('#ThousandIntervalTime').text(convertSecondsToTime((seconds / 3.106 + 10) * .62));
    $('#EightHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 + 5));
    $('#EightHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 + 5) * .5));
    $('#SixHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 10));
    $('#SixHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 10) * .37));
    $('#FourHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 20));
    $('#FourHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 20) * .25));
    $('#ThreeHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 30));
    $('#ThreeHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 30) * .19));
    $('#TwoHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 40));
    $('#TwoHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 40) * .12));
  }
  else if ((seconds / 3.106) > 630) {
    $('#MileIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 8));
    $('#MileIntervalTime').text(convertSecondsToTime(seconds / 3.106 - 8));
    $('#TwelveHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 11));
    $('#TwelveHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 11) * .75));
    $('#ThousandIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 11));
    $('#ThousandIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 11) * .62));
    $('#EightHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 21));
    $('#EightHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 21) * .5));
    $('#SixHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 31));
    $('#SixHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 31) * .37));
    $('#FourHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 51));
    $('#FourHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 51) * .25));
    $('#ThreeHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 61));
    $('#ThreeHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 61) * .19));
    $('#TwoHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 76));
    $('#TwoHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 76) * .12));
  }
  else {
    $('#MileIntervalPace').text(convertSecondsToTime(seconds / 3.106));
    $('#MileIntervalTime').text(convertSecondsToTime(seconds / 3.106));
    $('#TwelveHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106));
    $('#TwelveHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106) * .75));
    $('#ThousandIntervalPace').text(convertSecondsToTime(seconds / 3.106));
    $('#ThousandIntervalTime').text(convertSecondsToTime((seconds / 3.106) * .62));
    $('#EightHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 10));
    $('#EightHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 10) * .5));
    $('#SixHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 25));
    $('#SixHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 25) * .37));
    $('#FourHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 40));
    $('#FourHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 40) * .25));
    $('#ThreeHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 50));
    $('#ThreeHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 50) * .19));
    $('#TwoHundredIntervalPace').text(convertSecondsToTime(seconds / 3.106 - 60));
    $('#TwoHundredIntervalTime').text(convertSecondsToTime((seconds / 3.106 - 60) * .12));
  }
  $('#raceTimeTable').show();
  $('#intervalPaceTable').show();
  $('#trainingPaceTable').show();
}


function convertSecondsToTime(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}