const last_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function dateCalculation(date, month, year, end, occurence, dates) {
  if (end === 0) {
    return dates;
  }

  let start_date = date;
  let max_days_in_month = last_days[month];

  if (start_date > max_days_in_month) {
    start_date = month === 1 ? (year % 4 === 0 ? 29 : 28) : max_days_in_month;
  }
  const d = start_date < 10 ? `0${start_date}` : start_date;
  const m = month < 9 ? `0${month + 1}` : month + 1;
  dates.push(`${year}-${m}-${d}`);

  if (occurence > 1) {
    month += occurence;
    year += month > 11 ? 1 : 0;
    month = month % 12;
  } else {
    year += month === 11 ? 1 : 0;
    month = month === 11 ? 0 : month + 1;
  }
  end = end - 1;
  return dateCalculation(date, month, year, end, occurence, dates);
}
module.exports = dateCalculation;
