// Console log - check your browser console!
console.log("JavaScript Program Started!");
console.log("Current date:", new Date().toLocaleDateString());


//function to process userInfo

function userInfo() {
    //get values from input feilds
    const name = document.getElementById("userName").value;
    const age = document.getElementById("userAge").value;
    const color = document.getElementById("favoriteColor").value;

    //log to console

    console.log("User submitted data: ");
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Favorite Color: ", color);

    //validation
    if (!name || !age || !color) {
        alert("Please Fill The Feilds!");
        return
    }

    //convert age to Number
    const ageNumber = parseInt(age);

    //calculate Birth Year Apporximate
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - ageNumber;

    //is user is adult or not
    const isAdult = ageNumber >= 18;

    //calculate days lived (approximate)
    const daysLived = ageNumber * 365;

    //Create Personalized Message
    let ageCategory;
    if (ageNumber < 13) {
        ageCategory = "a Child";
    } else if (ageNumber < 18) {
        ageCategory = "a teenager";
    } else if (ageNumber < 60) {
        ageCategory = "an Adult";
    } else {
        ageCategory = "a senior"
    }


    //display results

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <h2>Hello, <span class="highlight">${name}</span>! 👋</h2>
    <p class="result-text">You are <span class="highlight">${ageNumber}</span> years old, which makes you <span class="highlight">${ageCategory}</span>.</p>
    <p class="result-text">You were born around <span class="highlight">${birthYear}</span>.</p>
    <p class="result-text">You've lived approximately <span class="highlight">${daysLived.toLocaleString()}</span> days!</p>
    <p class="result-text">Your favorite color is <span class="highlight" style="color: ${color}">${color}</span>. Great choice!</p>
    <p class="result-text">Adult status: <span class="highlight">${isAdult ? "Yes ✓" : "Not yet ✗"}</span></p>
    `;
    resultDiv.className = "show";

    //show alert with greeting
    alert(`Welcome, ${name}! Your information has been processed.`);

    console.log("Processing Complete");
    
}

// Welcome message when page loads
console.log("Welcome! Fill in the form and click submit to see the JavaScript in action");
