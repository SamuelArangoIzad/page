function updateClock() {
  const now = new Date();

  // Use 'en-US' locale for English
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);

  // Concatenate the weekday with the rest of the date
  const dateStr = weekday + '. ' + now.toLocaleDateString('en-US', options);

  const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });

  document.getElementById('date').innerHTML = dateStr;
  document.getElementById('time').innerHTML = timeStr;
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000); // Update every second
}

document.addEventListener('DOMContentLoaded', startClock);

document.addEventListener("DOMContentLoaded", function () {
  const infoSection = document.querySelector(".info-section");

  window.addEventListener("scroll", function () {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;

      // Adjust opacity based on scroll position
      const opacity = 1 - scrollPosition / 400;

      // Limit opacity to ensure it's in the range [0, 1]
      const limitedOpacity = Math.max(0, Math.min(1, opacity));

      // Apply opacity to the information section
      infoSection.style.opacity = limitedOpacity;
  });
});
