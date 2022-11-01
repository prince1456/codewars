function addAnd(isPlural, isZero, type) {
  return `${isPlural ? `${types[type].plural} ` : types[type].singular}${
    isZero ? "" : " and "
  }`;
}

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const yearInSecond = 31536000;
  const dayInSecond = 86400;
  const hourInSecond = 3600;
  const minuteInSecond = 60;
  const types = {
    minute: { plural: "minutes", singular: "minute" },
    second: { plural: "seconds", singular: "second" },
    hour: { plural: "hours", singular: "hour" },
    year: { plural: "years", singular: "year" },
    day: { plural: "days", singular: "day" },
  };
  const array = [];
  function calculateYears() {
    const numberOfYears = Math.floor(seconds / yearInSecond);
    if (seconds >= yearInSecond) {
      array.push(
        numberOfYears > 1
          ? `${numberOfYears} ${types.year.plural}`
          : `${numberOfYears} ${types.year.singular}`
      );
    }
    seconds = seconds - numberOfYears * yearInSecond;
  }

  function calculateDays() {
    const numberOfDays = Math.floor(seconds / dayInSecond);
    if (seconds >= dayInSecond) {
      array.push(
        numberOfDays > 1
          ? `${numberOfDays} ${types.day.plural}`
          : `${numberOfDays} ${types.day.singular}`
      );
    }
    seconds = seconds - numberOfDays * dayInSecond;
  }
  function calculateHours() {
    const numberOfHours = Math.floor(seconds / hourInSecond);
    if (seconds >= numberOfHours) {
      array.push(
        numberOfHours > 1
          ? `${numberOfHours} ${types.hour.plural}`
          : `${numberOfHours} ${types.hour.singular}`
      );
    }
    seconds = seconds - numberOfHours * hourInSecond;
  }
  function calculateMinutes() {
    const numberOfMinutes = Math.floor(seconds / minuteInSecond);
    if (seconds >= numberOfMinutes && numberOfMinutes !== 0) {
      array.push(
        numberOfMinutes > 1
          ? `${numberOfMinutes} ${types.minute.plural}`
          : `${numberOfMinutes} ${types.minute.singular}`
      );
    }

    seconds = seconds - numberOfMinutes * minuteInSecond;
  }
  function calculateSeconds() {
    array.push(
      seconds > 1
        ? `${seconds} ${types.second.plural}`
        : `${seconds} ${types.second.singular}`
    );
  }

  seconds >= yearInSecond && calculateYears();
  seconds >= dayInSecond && calculateDays();

  seconds >= hourInSecond && calculateHours();
  seconds !== 0 && seconds !== minuteInSecond && calculateMinutes();
  seconds !== 0 && calculateSeconds();
  let resultText = "";
  function formatText() {
    if (array.length === 1) {
      resultText = array[0];
    }
    if (array.length === 2) {
      resultText = `${array[0]} and ${array[1]}`;
    }
    if (array.length === 3) {
      resultText = `${array[0]}, ${array[1]} and ${array[2]}`;
    }
    if (array.length === 4) {
      resultText = `${array[0]}, ${array[1]}, ${array[2]} and ${array[3]}`;
    }
    if (array.length === 5) {
      resultText = `${array[0]}, ${array[1]}, ${array[2]}, ${array[3]} and ${array[4]}`;
    }
  }
  formatText();
  
  return resultText;
}



// smart way and best practice :(

function formatDuration2 (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }

console.log(formatDuration(15731080));
console.log(formatDuration(162));
console.log(formatDuration(62));



