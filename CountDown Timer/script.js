function startCountdown() {
  const inputDate = document.getElementById("countdown-date").value;
  
  if (!inputDate) {
      alert("Please set a date and time for the countdown.");
      return;
  }
  
  const countdownDate = new Date(inputDate).getTime();
  const countdown = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      if (timeRemaining < 0) {
          clearInterval(countdown);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
  }, 1000);
}
