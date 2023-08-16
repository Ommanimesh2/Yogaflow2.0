export default function getDaysAgo(start_date, end_date) {
  const sd = new Date(start_date);
  const timeDifference = end_date.getTime() - sd.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
  if (daysAgo == 0) {
    return "Today";
  } else {
    return `${daysAgo} days ago`;
  }
}
