const confirmbutton = document.getElementById('confirmbutton');

const checkOTP = async () => {
    const otp = document.getElementById('otpvalue').value; // Get value inside the function

    if (!otp) {
        alert("Please enter an OTP");
        return;
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "otp": otp })
    };

    try {
        const response = await fetch("http://localhost:3000/otp", options);
        const data = await response.text();
        console.log(data);

        // setTimeout(async () => {
            const res2 = await fetch(`http://localhost:3000/response`, {method: "GET"});
            const data2 = await res2.text(); 
            console.log(data2)
            if(data2 === "accept"){
                window.location.href = 'http://localhost:3500/success.html'
                console.log("ajdjjdj")
            }
            else{
                console.log("Payment Failed");
            }
        //  }, 3000);
    } catch (error) {
        console.error("Error:", error);
    }
};

confirmbutton.addEventListener('click', checkOTP);


// Set the time for countdown (6 minutes and 40 seconds)
let timeRemaining = 6 * 60 + 40; // 6 minutes 40 seconds in seconds

const timerElement = document.getElementById('timer');

// Function to update the timer display
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Format the time as MM:SS
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Decrease time remaining by 1 second
    timeRemaining--;

    // When the countdown reaches zero, stop the timer and display "Time's up!"
    if (timeRemaining < 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(timerInterval);
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);