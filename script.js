const days = [
  "SUNDAY","MONDAY","TUESDAY","WEDNESDAY",
  "THURSDAY","FRIDAY","SATURDAY"
];

function updateClock(){
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const day = days[now.getDay()];

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 12 en lugar de 0

  document.getElementById("hours").textContent =
    String(hours).padStart(2,"0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2,"0");

  document.getElementById("ampm").textContent = ampm;
  document.getElementById("weekday").textContent = day;
}

updateClock();
setInterval(updateClock, 1000);
