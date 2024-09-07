let countdownInterval;
function startCountdown() {
    const targetDateInput = document.getElementById('target-date').value;
    const targetDate = new Date(targetDateInput);
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate.getTime() - now;
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Time's up!";
            return;
        }
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        document.getElementById('countdown').textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
