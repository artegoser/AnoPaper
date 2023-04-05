function printDate(time) {
  time = new Date(time);
  function padStr(i) {
    return i < 10 ? "0" + i : "" + i;
  }

  let dateStr =
    settings.language === "ru" || settings.language === "ru-RU"
      ? `${padStr(time.getHours())}:${padStr(time.getMinutes())}:${padStr(
          time.getSeconds()
        )} ${padStr(time.getDate())}.${padStr(1 + time.getMonth())}.${padStr(
          time.getFullYear()
        )}`
      : `${time.toLocaleTimeString("en-US")} ${padStr(
          1 + time.getMonth()
        )}/${padStr(time.getDate())}/${padStr(time.getFullYear())}`;

  return dateStr;
}

function reRenderPage() {
  window.dispatchEvent(new Event("reRenderPage"));
}

export { printDate, reRenderPage };
