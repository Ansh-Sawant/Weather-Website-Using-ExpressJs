const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");
const datahide = document.querySelector(".middle_layer");

let date = new Date();
const allDays = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
day.innerText = `${allDays[date.getDay()]}`;
const allMonths = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
today_date.innerText = `${date.getDate()} ${allMonths[date.getMonth()]}`;

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8b51f13956b494cfd3b8cf67119489e5`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = Math.round(arrData[0].main.temp);
      temp_status.innerText = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;
      if (tempMood === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      }

      datahide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = `Please enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
