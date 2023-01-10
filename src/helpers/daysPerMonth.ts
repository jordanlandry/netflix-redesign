// Takes in a month number and returns the number of days in that month
export default function daysPerMonth(month: number) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Days in each month from January to December
  if (month === 1 && new Date().getFullYear() % 4 === 0) days[1] = 29; // Leap year

  // Return an array from 1 to the number of days in the month
  return Array.from({ length: days[month] }, (_, i) => i + 1);
}
