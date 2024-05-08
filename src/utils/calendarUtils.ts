export const yearMonthDate = (date: Date) => {
  // Get the ISO 8601 string representation of the date
  const isoString = date.toISOString();

  // Extract the year, month, and day parts from the ISO string
  const year = isoString.slice(0, 4);
  const month = isoString.slice(5, 7);
  const day = isoString.slice(8, 10);

  // Create the formatted date string
  const formattedDate = `${year}/${month}/${day}`;

  return formattedDate;
};
