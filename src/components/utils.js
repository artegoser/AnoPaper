function printDate(time) {
  time = new Date(time);
  function padStr(i) {
    return i < 10 ? "0" + i : "" + i;
  }

  let dateStr = `${padStr(time.getHours())}:${padStr(
    time.getMinutes()
  )}:${padStr(time.getSeconds())} ${padStr(time.getDate())}.${padStr(
    1 + time.getMonth()
  )}.${padStr(time.getFullYear())}`;

  return dateStr;
}

export default printDate;
