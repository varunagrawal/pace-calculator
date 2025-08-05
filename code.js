$(document).ready(function () {
  $('#raceTimeTable').hide();
  $('#intervalPaceTable').hide();
  $('#trainingPaceTable').hide();

  // If `hours` field is updated
  $('#hours').on('keyup', function (e) {
    var key = e.keyCode;
    if (key != 8 && !((key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
      this.value = this.value.slice(0, this.value.length - 1);
      this.text = this.value;
    }
    else if (key == 8) {
      $('#raceTimeTable').hide();
      $('#intervalPaceTable').hide();
      $('#trainingPaceTable').hide();
    }
    if (this.value.length >= 1 && $("#seconds").val().length >= 2 && $("#minutes").val().length >= 2) {
      TimeCalculations();
    }
    else if (this.value.length >= 1) {
      $("#minutes").focus();
    }
  });

  // If `minutes` field is updated
  $('#minutes').on('keyup', function (e) {
    var key = e.keyCode;
    if (key != 8 && !((key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
      this.value = this.value.slice(0, this.value.length - 1);
      this.text = this.value;
    }
    else if (key == 8) {
      $('#raceTimeTable').hide();
      $('#intervalPaceTable').hide();
      $('#trainingPaceTable').hide();
    }
    if (key == 8 && this.value.length == 0) {
      $("#hours").focus();
    }
    if (this.value.length >= 1 && $("#hours").val().length >= 1 && $("#seconds").val().length >= 1) {
      TimeCalculations();
    }
    else if (this.value.length >= 2) {
      $("#seconds").focus();
    }
  });

  // If `seconds` field is updated
  $('#seconds').on('keyup', function (e) {
    var key = e.keyCode;
    if (key != 8 && !((key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
      this.value = this.value.slice(0, this.value.length - 1);
      this.text = this.value;
    }
    else if (key == 8) {
      $('#raceTimeTable').hide();
      $('#intervalPaceTable').hide();
      $('#trainingPaceTable').hide();
    }
    if (key == 8 && this.value.length == 0) {
      $("#minutes").focus();
    }
    if (this.value.length >= 1 && $("#hours").val().length >= 1 && $("#minutes").val().length >= 1) {
      TimeCalculations();
    }
  });

  // Update if `distance` is changed
  $('#distance').on('change', function () {
    if ($("#seconds").length >= 2 && $("#hours").val().length >= 1 && $("#minutes").val().length >= 2) {
      TimeCalculations();
    }
  });

});

function TimeCalculations() {
  var seconds = 0;
  var hours = $("#hours").val();
  var minutes = $("#minutes").val();
  var secondsTemp = $("#seconds").val();
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

  $('#MileRaceTime').text(ConvertSecondsToTime(seconds / 3.39));
  $('#MileRacePace').text(ConvertSecondsToTime(seconds / 3.39));
  $('#3kRaceTime').text(ConvertSecondsToTime(seconds / 1.716));
  $('#3kRacePace').text(ConvertSecondsToTime(seconds / 1.716 / 1.87));
  $('#5kRaceTime').text(ConvertSecondsToTime(seconds));
  $('#5kRacePace').text(ConvertSecondsToTime(seconds / 3.106));
  $('#10kRaceTime').text(ConvertSecondsToTime(seconds * 2.098));
  $('#10kRacePace').text(ConvertSecondsToTime(seconds * 2.098 / 6.2));
  $('#HalfRaceTime').text(ConvertSecondsToTime(seconds * 4.7));
  $('#HalfRacePace').text(ConvertSecondsToTime(seconds * 4.7 / 13.1));
  $('#FullRaceTime').text(ConvertSecondsToTime(seconds * 9.94));
  $('#FullRacePace').text(ConvertSecondsToTime(seconds * 9.94 / 26.2));
  $('#ModeratePaceMin').text(ConvertSecondsToTime(seconds / 3.106 + 60));
  $('#ModeratePaceMax').text(ConvertSecondsToTime(seconds / 3.106 + 80));
  $('#EasyPaceMin').text(ConvertSecondsToTime(seconds / 3.106 + 120));
  $('#EasyPaceMax').text(ConvertSecondsToTime(seconds / 3.106 + 150));
  $('#RecoveryPaceMin').text(ConvertSecondsToTime(seconds / 3.106 + 160));
  $('#RecoveryPaceMax').text(ConvertSecondsToTime(seconds / 3.106 + 200));
  if ((seconds / 3.106) < 490) {
    $('#MileIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 + 12));
    $('#MileIntervalTime').text(ConvertSecondsToTime(seconds / 3.106 + 12));
    $('#TwelveHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 + 10));
    $('#TwelveHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 + 10) * .75));
    $('#ThousandIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 + 10));
    $('#ThousandIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 + 10) * .62));
    $('#EightHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 + 5));
    $('#EightHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 + 5) * .5));
    $('#SixHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 10));
    $('#SixHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 10) * .37));
    $('#FourHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 20));
    $('#FourHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 20) * .25));
    $('#ThreeHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 30));
    $('#ThreeHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 30) * .19));
    $('#TwoHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 40));
    $('#TwoHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 40) * .12));
  }
  else if ((seconds / 3.106) > 630) {
    $('#MileIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 8));
    $('#MileIntervalTime').text(ConvertSecondsToTime(seconds / 3.106 - 8));
    $('#TwelveHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 11));
    $('#TwelveHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 11) * .75));
    $('#ThousandIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 11));
    $('#ThousandIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 11) * .62));
    $('#EightHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 21));
    $('#EightHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 21) * .5));
    $('#SixHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 31));
    $('#SixHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 31) * .37));
    $('#FourHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 51));
    $('#FourHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 51) * .25));
    $('#ThreeHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 61));
    $('#ThreeHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 61) * .19));
    $('#TwoHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 76));
    $('#TwoHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 76) * .12));
  }
  else {
    $('#MileIntervalPace').text(ConvertSecondsToTime(seconds / 3.106));
    $('#MileIntervalTime').text(ConvertSecondsToTime(seconds / 3.106));
    $('#TwelveHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106));
    $('#TwelveHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106) * .75));
    $('#ThousandIntervalPace').text(ConvertSecondsToTime(seconds / 3.106));
    $('#ThousandIntervalTime').text(ConvertSecondsToTime((seconds / 3.106) * .62));
    $('#EightHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 10));
    $('#EightHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 10) * .5));
    $('#SixHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 25));
    $('#SixHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 25) * .37));
    $('#FourHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 40));
    $('#FourHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 40) * .25));
    $('#ThreeHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 50));
    $('#ThreeHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 50) * .19));
    $('#TwoHundredIntervalPace').text(ConvertSecondsToTime(seconds / 3.106 - 60));
    $('#TwoHundredIntervalTime').text(ConvertSecondsToTime((seconds / 3.106 - 60) * .12));
  }
  $('#raceTimeTable').show();
  $('#intervalPaceTable').show();
  $('#trainingPaceTable').show();
}


function ConvertSecondsToTime(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}