// Function to format a date as YYYY-MM-DD
export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10);
}

// Function to get a date minus a specified number of days
export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
