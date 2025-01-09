// JavaScript to display the current date and time
document.getElementById("showDateButton").addEventListener("click", () => {
  const now = new Date();
  const formattedDate = now.toLocaleString();
  document.getElementById("dateTime").textContent = `Current Date and Time: ${formattedDate}`;
});
