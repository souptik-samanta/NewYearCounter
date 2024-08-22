document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year-select');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const yearsInfo = document.getElementById('years-info');
    const monthsInfo = document.getElementById('months-info');
    const daysInfo = document.getElementById('days-info');
    const messageElement = document.getElementById('message');
    
    function updateCountdown() {
        const selectedYear = parseInt(yearSelect.value);
        const now = new Date();
        const nextYear = new Date(selectedYear, 0, 1);
        let timeDifference = nextYear - now;

        if (timeDifference < 0) {
            nextYear.setFullYear(nextYear.getFullYear() + 1);
            timeDifference = nextYear - now;
        }

        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        daysElement.textContent = formatNumber(days);
        hoursElement.textContent = formatNumber(hours);
        minutesElement.textContent = formatNumber(minutes);
        secondsElement.textContent = formatNumber(seconds);

        const years = Math.floor(days / 365);
        const months = Math.floor((days % 365) / 30);
        const daysRemaining = days % 30;
        
        yearsInfo.textContent = `Years: ${years}`;
        monthsInfo.textContent = `Months: ${months}`;
        daysInfo.textContent = `Days: ${daysRemaining}`;
    }

    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    yearSelect.addEventListener('change', updateCountdown);

    setInterval(updateCountdown, 1000);
    updateCountdown(); 
});
