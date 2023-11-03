document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the user's input
    const nameInput = document.getElementById("name");
    const classInput = document.getElementById("class");
    const seatNum = document.getElementById("seatNum");

    // Get the table element to display registered data
    const registrationTable = document.getElementById("registrationTable");

    // Create a new table row for the registered data
    const newRow = registrationTable.insertRow();

    // Add the name and class as table cells in the row
    const nameCell = newRow.insertCell(0);
    const classCell = newRow.insertCell(1);
    const seatNumCell = newRow.insertCell(2);
    const attendanceCell = newRow.insertCell(3);

    nameCell.innerHTML = nameInput.value;
    classCell.innerHTML = classInput.value;
    seatNumCell.innerHTML = seatNum.value;

    // Create button for attendance and add them to the table
    attendanceCell.innerHTML = `
    <div class="button-container">
        <button class="present-btn" onclick="markAttendance(this, 'present')">Present</button>
         <button class="absent-btn" onclick="markAttendance(this, 'absent')">Absent</button>
                </div>`;

    // Clear the input fields
    nameInput.value = "";
    classInput.value = "";
    seatNum.value = "";
});

// Function to mark attendance as Present or Absent
function markAttendance(button, attendance) {
    const attendanceCell = button.parentNode;
    attendanceCell.textContent = attendance;
}
if (data.attendance === "present") {
    markAttendance(newRow.querySelector(".present-btn"), "present");
} else if (data.attendance === "absent") {
    markAttendance(newRow.querySelector(".absent-btn"), "absent");
}
