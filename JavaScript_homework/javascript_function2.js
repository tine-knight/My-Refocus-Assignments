function toHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainder = seconds % 3600;
  return { hours, remainder };
}
function toMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return { minutes, remainder };
}
function humanDuration(duration) {
  const hoursObject = toHours(duration);
  const minutesObject = toMinutes(hoursObject.remainder);
  const seconds = minutesObject.remainder;
  
  return `The formatted duration of ${duration} is ${hoursObject.hours} ${hoursObject.hours > 1 ? 'Hours' : 'Hour'}, ${minutesObject.minutes} ${minutesObject.minutes > 1 ? 'Minutes' : 'Minute'} and ${seconds} ${seconds > 1 ? 'Seconds' : 'Second'}.`;
}
console.log(humanDuration(4800)); // The formatted duration of 4800 is 1 Hour, 20 Minutes and 0 Seconds.
console.log(humanDuration(5212)); // The formatted duration of 5212 is 1 Hour, 26 Minutes and 52 Seconds.
console.log(humanDuration(300)); // The formatted duration of 300 is 5 Minutes and 0 Seconds.
