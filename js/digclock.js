function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours();
    var timeDiff;
    var adjustTimeDiff;
    var timeZone;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr == 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    if (utchr > 12) {
      utchr -= 12;
    }
    if (utchr < hr) {
      utchr += 12;
    }

    timeDiff = utchr - hr;

    if (timeDiff < 0) {
      adjustTimeDiff = timeDiff * -1;
    } else {
      adjustTimeDiff = timeDiff;
    }

    if (adjustTimeDiff == 4) {
      timeZone = "ET";
    } else if (adjustTimeDiff == 5) {
      timeZone = "CT";
    } else if (adjustTimeDiff == 6) {
      timeZone = "MT";
    } else if (adjustTimeDiff == 7) {
      timeZone = "PT";
    } else {
      timeZone = "";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;
    setInterval(currentTime, 1000);
  }

  currentTime();