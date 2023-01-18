import properties from "../../properties";

// Based on the user's birthday, return the max year they can pick based on the max age
export default function getYear(day: number, month: number) {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Get the current month
  const currentMonth = new Date().getMonth();

  // Get the current day
  const currentDay = new Date().getDate();

  // If the user's birthday has already happened this year, return the current year - the min age
  if (month < currentMonth || (month === currentMonth && day <= currentDay)) return currentYear - properties.MIN_AGE;

  // If the user's birthday hasn't happened yet this year, return the current year - 1
  return currentYear - 1 - properties.MIN_AGE;
}
