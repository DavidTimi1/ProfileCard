document.addEventListener("DOMContentLoaded", () => {
  function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentTime = new Date().toUTCString();
    currentTimeElement.textContent = currentTime;
  }

  // Update the time every second
  updateCurrentTime();
});
