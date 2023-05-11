//"http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no"
// sollys i dag

const icon = document.getElementById("vejrImage");
const timerText = document.getElementById("flereTimerText");
const amountSun = document.getElementById("amountSun");

let staticURL =
  "http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no";

//let staticURL = "js/weather.json";

// staticURL = data;

function getData() {
  $.ajax({
    //async: false,
    url: staticURL,
    dataType: "json",
    success: async function (data) {
      let currentIcon = data.current.condition.icon;
      icon.src = currentIcon;

      let currentCondition = data.current.condition;
      console.log(currentCondition);

      let yesterdayHours = await yesterdayAmountHours(
        data.forecast.forecastday[0].date
      );
      let todayHours = dayAmountHours(data);
      console.log("Yesterday: ", yesterdayHours);
      console.log("Today: ", todayHours);

      totalAmountHours(todayHours, yesterdayHours);
    },
  });
}

function dayAmountHours(data) {
  console.log(data);
  // Start timeren på 0
  let hoursToday = 0;

  // Loop igennem alle timer i JSON-elementet
  for (let i = 0; i < 24; i++) {
    let forecast = data.forecast.forecastday[0].hour[i];
    // Hvis is_day = 1 og condition.text = sunny eller clear, så tæl 1 til timeren
    if (
      forecast.is_day === 1 &&
      (forecast.condition.text === "Sunny" ||
        forecast.condition.text === "Clear")
    ) {
      hoursToday++;
    }
  }
  return hoursToday;
}

async function yesterdayAmountHours(dateString) {
  let date = new Date(dateString);
  date.setDate(date.getDate() - 1);

  let yesterDate = date.toISOString().slice(0, 10);

  let yesterdayURL = `http://api.weatherapi.com/v1/history.json?key=0de091b05e714a72a3385754230603&q=Slagelse&dt=${yesterDate}`;

  try {
    let response = await fetch(yesterdayURL);
    let data = await response.json();
    let hoursYesterday = 0;

    for (let i = 0; i < 24; i++) {
      let forecast = data.forecast.forecastday[0].hour[i];

      if (
        forecast.is_day === 1 &&
        (forecast.condition.text === "Sunny" ||
          forecast.condition.text === "Clear")
      ) {
        hoursYesterday++;
      }
    }
    return hoursYesterday;
  } catch (error) {
    console.error("Error fetching yesterday's weather data:", error);
    throw error;
  }
}

function totalAmountHours(today, yesterday) {
  // Calculate the difference between the two values
  let sunlightDifference = today - yesterday;

  amountSun.innerHTML = `I dag skinner solen i alt i ${today} timer.`;

  // Compare the two values and print the result
  if (sunlightDifference > 0) {
    console.log(`Der er ${sunlightDifference} timer mere sollys i dag.`);
    timerText.innerHTML = `Det er ${sunlightDifference} timer mere sollys i dag,</br> end der var i går.`;
  } else if (sunlightDifference < 0) {
    timerText.innerHTML = `Det er ${Math.abs(
      sunlightDifference
    )} timer mindre sollys i dag, </br> end der var i går.`;
  } else {
    timerText.innerHTML =
      "Det er den samme mængde sollys i dag som der var i går.";
  }
}

getData();

/**
 * Sunny
 * Clear
 * 1 = Yes 0 = No
Whether to show day condition icon or night icon
 */

/**
 * timer = 0
 * find is_day = 1
 * så tjek condition.text = sunny or clear, plus 1 til timer
 * loop igennem alle timer fra json element
 */
