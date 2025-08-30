// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Create audio objects
var backgroundMusic = new Audio('background.mp3'); // First screen music
var yesMusic = new Audio('yes-sound.mp3'); // Music after clicking "Yes"

// Set looping for background music
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5; // Adjust volume

// Function to start background music on user interaction
function startMusic() {
    backgroundMusic.play().catch(error => console.log("Autoplay blocked:", error));
    // Remove event listener after first interaction
    document.body.removeEventListener('click', startMusic);
}

// Listen for the first user interaction
document.body.addEventListener('click', startMusic);

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Stop background music
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Reset its time
        
        // Flash rainbow effect before playing new music
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Show new image
            
            // Play "Yes" music for 5 seconds
            yesMusic.play();
            setTimeout(function() {
                yesMusic.pause(); // Stop after 5 seconds
                yesMusic.currentTime = 0; // Reset its time
            }, 5000);
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}





// Display the cat.gif initially
displayCat();