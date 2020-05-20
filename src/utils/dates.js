/* eslint-disable prettier/prettier */
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = (date) => {
  if (date.length > 5) {
    const movieDate = new Date(date);
    const year = movieDate.getFullYear();
    const month = monthNames[movieDate.getMonth()].substring(0, 3);
    const day = movieDate.getDate();
    return `${day} ${month}, ${year}`;
  } else {
    return date;
  }
};
export default formatDate;
