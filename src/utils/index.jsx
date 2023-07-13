export const getDateAndTime = (eventTime) => {
    const date = new Date(eventTime);

// Format the date
const formattedDate = date.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

// Format the time
const formattedTime = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
});
const formatted = {
    date: formattedDate,
    time: formattedTime
}
return formatted
}

