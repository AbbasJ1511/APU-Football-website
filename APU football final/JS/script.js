// List of months
const months = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

// Number of days in each month of 2026
const monthDays = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
];

// First weekday of each month
// Sunday = 0, Monday = 1, etc.
const firstDays = [
    4, 0, 0, 3, 5, 1,
    3, 6, 2, 4, 0, 2
];

// Current month
let currentMonth = 11;

// Select HTML elements
const calendar = document.getElementById("calendar");
const monthTitle = document.getElementById("monthTitle");
const eventInformation = document.getElementById("eventInformation");

const previousButton = document.getElementById("previousMonth");
const nextButton = document.getElementById("nextMonth");

// Function to display the calendar
function displayCalendar() {

    // Display month and year
    monthTitle.textContent = months[currentMonth] + " 2026";

    // Clear the previous calendar
    calendar.innerHTML = "";

    // Create calendar heading
    let row = document.createElement("tr");

    const weekdays = [
        "Sun", "Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat"
    ];

    for (let i = 0; i < 7; i++) {

        let cell = document.createElement("td");

        cell.textContent = weekdays[i];

        row.appendChild(cell);
    }

    calendar.appendChild(row);

    // Create date cells
    let day = 1;

    for (let i = 0; i < 6; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {

            let cell = document.createElement("td");

            if (i === 0 && j < firstDays[currentMonth]) {

                cell.textContent = "";

            } else if (day <= monthDays[currentMonth]) {

                cell.textContent = day;

                cell.addEventListener("click", function() {

                    showEvent(day - 1);

                });

                day++;

            } else {

                cell.textContent = "";
            }

            row.appendChild(cell);
        }

        calendar.appendChild(row);
    }
}

// Function to display event information
function showEvent(selectedDay) {

    let message = "No scheduled events on this date.";

    if (currentMonth === 10 && selectedDay === 24) {
        message = "Team Meeting - 3:00 PM at APU Campus.";
    }

    if (currentMonth === 11 && selectedDay === 1) {
        message = "Football Friendly - 4:00 PM at APU Football Field.";
    }

    if (currentMonth === 11 && selectedDay === 9) {
        message = "Club Training Day - 4:00 PM at APU Football Field.";
    }

    if (currentMonth === 11 && selectedDay === 17) {
        message = "End of Year Celebration - 6:00 PM at APU Campus.";
    }

    eventInformation.textContent = message;
}

// Previous month button
previousButton.addEventListener("click", function() {

    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
    }

    eventInformation.textContent = "Select a date to see its events.";

    displayCalendar();

});

// Next month button
nextButton.addEventListener("click", function() {

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
    }

    eventInformation.textContent = "Select a date to see its events.";

    displayCalendar();

});

// Display calendar when page loads
displayCalendar();
