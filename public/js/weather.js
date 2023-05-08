//"http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no"
// sollys i dag

/**
 * hvad skal jeg lave?
 *
 * Finde ud af hvornår solen står op og går ned, og så finder antal timer på døgn
 *
 * finde ud af fra json fil:
 * hvonår solen står op og går ned, for at kunne tjekke timerne mellem der - gem værdi
 *
 * tjek timerne mellem solen står op og går, find procent skyer, samt vejr.
 *
 * for de timer hvor der er mere end 50% skyer, skal der blive taget en time fra solly i alt
 * tilføj i alt timer til database
 *
 * skrive forskellige promts, i forhold til mængde sollys.
 *
 * find mængde sollys for dagen før
 *
 */

const text = document.getElementById("text");
const icon = document.getElementById("icon");
const time = document.getElementById("time");
const isDay = document.getElementById("isDay");
const cloud = document.getElementById("cloud");

//let staticURL =
//  "http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no&lang=da";

//let staticURL = "../version 0.1/Postgres Quickstart/weather.json";
// staticURL = data;

function getData() {
  $.ajax({
    //async: false,
    url: staticURL,
    dataType: "json",
    success: function (data) {
      let datas = data;

      let currentCondition = data.current.condition;
      console.log(currentCondition);

      dayAmountHours(datas);

      let currentText = data.current.condition.text;
      let currentIcon = data.current.condition.icon;
      let timeDay = data.forecast.forecastday[0].hour[2].time;
      let dayIsDay = data.forecast.forecastday[0].hour[2].is_day;
      let dayCloud = data.forecast.forecastday[0].hour[2].cloud;

      text.innerHTML = "Vejr " + currentText;
      icon.src = currentIcon;
      time.innerHTML = "Tid og dato " + timeDay;
      isDay.innerHTML = "Er dag " + dayIsDay;
      cloud.innerHTML = "Procent skyer " + dayCloud + "%";
    },
  });
}

/*
$.getJSON(staticURL, function (data) {
  console.log("hello");
  console.log(data);
  //console.log(data.current.condition);

  let currentText = data.current.condition.text;
  let currentIcon = data.current.condition.icon;
  let timeDay = data.forecast.forecastday[0].hour[2].time;
  let dayIsDay = data.forecast.forecastday[0].hour[2].is_day;
  let dayCloud = data.forecast.forecastday[0].hour[2].cloud;

  text.innerHTML = "Vejr " + currentText;
  icon.src = currentIcon;
  time.innerHTML = "Tid og dato " + timeDay;
  isDay.innerHTML = "Er dag " + dayIsDay;
  cloud.innerHTML = "Procent skyer " + dayCloud + "%";

  return data;
});*/

function dayAmountHours(data) {
  console.log(data);

  let astro = data.forecast.forecastday[0].astro;

  console.log(astro);

  return;
}

getData();
