function calculateDaysLeft(targetDate) {
    const today = new Date();
    const futureDate = new Date(targetDate);
    const timeDiff = futureDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysLeft;
}

document.addEventListener("DOMContentLoaded", () => {
    const targetDate = "August 20, 2024";
    const daysLeft = calculateDaysLeft(targetDate);
    document.getElementById("days-left").textContent = daysLeft;
});

function updateDateTime() {
    const footer = document.getElementById('current-timestamp');
    const dateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
    footer.textContent = `Today's Date and Time: ${formattedDateTime}`;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second