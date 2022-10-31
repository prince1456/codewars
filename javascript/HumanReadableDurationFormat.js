function addAnd(isPlural, isZero, type) {
    return `${isPlural ? `${types[type].plural} ` : types[type].singular}${
      isZero ? "" : " and "
    }`;
  }
  
  function formatDuration(seconds) {
    console.log({seconds})
    if (seconds === 0) {
      return "now";
    }
    const yearInSecond = 31536000;
    const dayInSecond = 86400;
    const hourInSecond = 3600;
    const minuteInSecond = 60;
    let text = "";
    const types = {
      minute: { plural: "minutes", singular: "minute" },
      second: { plural: "seconds", singular: "second" },
      hour: { plural: "hours", singular: "hour" },
      year: { plural: "years, ", singular: "year, " },
      day: { plural: "days, ", singular: "day, " },
    };
  
    function calculateYears() {
      const numberOfYears = Math.floor(seconds / yearInSecond);
      if (seconds != 0 && seconds % yearInSecond === 0) {
          text = `${numberOfYears} ${numberOfYears > 1  ? 'days' : 'day'}`
      }
   
      if (seconds > yearInSecond) {
          text = `${text}${numberOfYears} ${
            numberOfYears > 1 ? `${types.year.plural}` : types.year.singular
          }`;
        }
      seconds = seconds - numberOfYears * yearInSecond;
    
    }
  
    function calculateDays() {
      const numberOfDays = Math.floor(seconds / dayInSecond);
      if (seconds != 0 && seconds % dayInSecond === 0) {
          text = `${numberOfDays} ${numberOfDays > 1  ? 'days' : 'day'}`
      }
      if (seconds > dayInSecond) {
          text = `${text}${numberOfDays} ${
            numberOfDays > 1 ? `${types.day.plural}` : types.day.singular
          }`;
        }
      seconds = seconds - numberOfDays * dayInSecond;
    }
    function calculateHours() {
      const numberOfHours = Math.floor(seconds / hourInSecond);
      if(seconds > hourInSecond) {
        text = `${text}${numberOfHours} ${
          numberOfHours > 1 ? `${types.hour.plural}` : types.hour.singular
        }`;
      }
      if (seconds != 0 && seconds % hourInSecond === 0) {
          text = `${numberOfHours} ${numberOfHours > 1  ? 'hours' : 'hour'}`
      } 
  
      seconds = seconds - numberOfHours * hourInSecond;
    //  add , or and 
    }
    function calculateMinutes() {
      const numberOfMinutes = Math.floor(seconds / minuteInSecond);
      if( text.length > 0, text.includes("hour") ) {
        text = `${seconds / minuteInSecond}`.includes('.') ? text + ', ' : text + ' and '
    }
      if (seconds !== 0 && seconds % minuteInSecond === 0) {
        text = text +`${numberOfMinutes} ${numberOfMinutes > 1  ? 'minutes' : 'minute'}`
      }
      else if (seconds > minuteInSecond) {
      
        text = `${text}${numberOfMinutes} ${
          numberOfMinutes > 1 ? `${types.minute.plural} and ` : types.minute.singular + ' and '
        }`;
      }
      seconds = seconds - numberOfMinutes * minuteInSecond;
    }
    function calculateSeconds () {
      if (seconds < minuteInSecond && seconds > 0) {
          text = `${text}${seconds} ${
            seconds > 1 ? `${types.second.plural}` : types.second.singular
          }`;
        }
    }


    seconds >= yearInSecond && calculateYears();
    seconds >= dayInSecond && calculateDays();
    seconds >= hourInSecond && calculateHours();
    seconds !== 0 && seconds !== minuteInSecond && calculateMinutes();
    calculateSeconds();
  
  
    // if(seconds >= minuteInSecond) {
    //     const numberOfMinutes = Math.floor(seconds / minuteInSecond)
    //     const isZero = seconds - numberOfMinutes * minuteInSecond === 0
    //     text = `${text}${numberOfMinutes} ${addAnd(numberOfMinutes > 1, isZero, 'minute')}`
    //     seconds = seconds - numberOfMinutes * minuteInSecond
    // }
    // if(seconds < 60 && seconds > 0) {
    //     text = `${text}${seconds} ${addAnd(seconds > 1, true, 'second')}`;
    // }
    // console.log("1xasdsa", text.trim())
    return text.trim();
  }
//   console.log(formatDuration(3600));
//   console.log(formatDuration(3662));
  console.log(formatDuration(4668898));
  
  //  "1 minute and 2 seconds"
  