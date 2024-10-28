function calculateCurrentAttendance() {
    const attended = parseInt(document.getElementById('attended').value);
    const conducted = parseInt(document.getElementById('conducted').value);

    if (!conducted || conducted <= 0) {
        alert("Please enter the total classes conducted.");
        return;
    }

    const currentAttendance = (attended / conducted) * 100;
    let message = `📊 Your current attendance is ${currentAttendance.toFixed(2)}%. `;

    if (currentAttendance < 75) {
        message += "🚨 Go to class! Your attendance is low.";
        displayMessage(message, '#ff6f61');
    } else if (currentAttendance >= 90) {
        message += "😎 Chill yaar, you're good to go!";
        displayMessage(message, '#6fcf97');
    } else {
        message += "👍 Keep attending to stay on track!";
        displayMessage(message, '#ffcd4e');
    }
}

function showOverallAttendance() {
    const subjects = parseInt(prompt("Enter the number of subjects:"));
    let totalAttendance = 0;

    for (let i = 1; i <= subjects; i++) {
        const attended = parseInt(prompt(`Enter classes attended for subject ${i}:`));
        const conducted = parseInt(prompt(`Enter classes conducted for subject ${i}:`));
        const subjectAttendance = (attended / conducted) * 100;
        totalAttendance += subjectAttendance;
    }

    const overallAttendance = (totalAttendance / subjects).toFixed(2);
    let message = `📚 Your overall attendance across ${subjects} subjects is ${overallAttendance}%. `;

    if (overallAttendance < 75) {
        message += "🚨 Go to class! Your overall attendance is low.";
        displayMessage(message, '#ff6f61');
    } else if (overallAttendance >= 90) {
        message += "😎 Chill yaar, you're good to go!";
        displayMessage(message, '#6fcf97');
    } else {
        message += "👍 Keep attending to stay on track!";
        displayMessage(message, '#ffcd4e');
    }
}

function displayMessage(message, color) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('ui', 'message');
    resultDiv.style.backgroundColor = color;
    resultDiv.textContent = message;
}
