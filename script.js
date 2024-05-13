document.querySelector("#date").addEventListener("change", () => {
  counter();
});

function counter() {
  const inputElement = document.querySelector("#date");
  const inputValue = inputElement.value;

  const todayDate = new Date();
  const targetDate = new Date(`${inputValue}T00:00:00`);

  let timeDifference = targetDate - todayDate;

  if (timeDifference < 0) {
    timeDifference = -timeDifference;
  }

  const totalSeconds = Math.floor(timeDifference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  let html = `
  <div><span class="time">${days}</span><p class="text">${
    days == 1 ? "Day" : "Days"
  }</p></div>
  <div><span class="time">${hours}</span><p class="text">${
    hours == 1 ? "Hour" : "Hours"
  }</p></div>
  <div><span class="time">${minutes}</span><p class="text">${
    minutes == 1 ? "Minute" : "Minutes"
  }</p></div>
  <div><span class="time">${seconds}</span><p class="text">${
    seconds == 1 ? "Second" : "Seconds"
  }</p></div>
  `;
  document.querySelector(".counter").innerHTML = html;
  setTimeout(counter, 1000);
}
