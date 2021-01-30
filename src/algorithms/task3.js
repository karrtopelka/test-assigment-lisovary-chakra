const task3 = (d) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = d ? days[d.getDay()] : null;
  return day;
};

export default task3;
