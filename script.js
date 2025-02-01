document.addEventListener("DOMContentLoaded", () => {
  function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentTime = new Date().toUTCString();
    currentTimeElement.textContent = `Current UTC Time: ${currentTime}`;
  }

  // Update the time every second
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime();
});
