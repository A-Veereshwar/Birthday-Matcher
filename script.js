document.addEventListener('DOMContentLoaded', function() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const matchBtn = document.getElementById('match-btn');

    function populateDays() {
        const selectedMonth = parseInt(monthSelect.value);
        const daysInMonth = new Date(2024, selectedMonth, 0).getDate();
        daySelect.innerHTML = '';

        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    monthSelect.addEventListener('change', populateDays);

    function handleMatchButtonClick() {
        const selectedDay = parseInt(daySelect.value);
        const selectedMonth = parseInt(monthSelect.value);
        
        // Redirect to celebrities.html page with query parameters for selected day and month
        window.location.href = `celebrities.html?day=${selectedDay}&month=${selectedMonth}`;
    }

    matchBtn.addEventListener('click', handleMatchButtonClick);
    populateDays();
});
