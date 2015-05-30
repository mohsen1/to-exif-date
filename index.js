module.exports = function toExifDate(date) {
  if (!date instanceof Date) {
    throw new Error('date argument should be a Date instance.');
  }

  // Example EXIF date: "2010:10:10 10:10:10";

  return (date.getYear() + 1900) +       // year
          ':' +
          pad(date.getMonth() + 1) +     // month
          ':' +
          pad(date.getDate()) +          // day
          ' ' +
          pad(date.getHours()) +         // hours
          ':' +
          pad(date.getMinutes()) +       // minutes
          ':' +
          pad(date.getSeconds());        // seconds

};

function pad (number) {
  if (number > 9) {
    return number;
  }

  return '0' + number;
}