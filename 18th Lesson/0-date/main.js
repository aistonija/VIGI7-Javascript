document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let date1 = event.target.elements.dateStart.value;
  let date2 = event.target.elements.dateEnd.value;

  let dateStart = new Date(date1);
  let dateEnd = new Date(date2);

  let difference = dateEnd.getTime() - dateStart.getTime();

  let daysCount = Math.ceil(difference / (1000 * 3600 * 24));

  console.log(daysCount);
  const now = new Date();
  console.log(now.getTime());
});

// https://dev.to/dailydevtips1/vanilla-javascript-days-between-two-dates-3d1i
