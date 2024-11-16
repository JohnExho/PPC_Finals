// Correctly selecting all elements with the 'item' class
const switchBackBtn = document.querySelector('#switchBackBtn');
const items = document.querySelectorAll('.item');  // Select all items
const TopLink = document.querySelector('.TopLink');
const GotoMain = document.querySelector('.MainPage')

// Add event listeners to each 'item' element
items.forEach(item => {
    item.addEventListener('click', function (event) {
        // Prevent the default action of the anchor tag (navigate to the link)
        event.preventDefault();

        // Apply fade-out animation to the current page
        document.body.classList.add('fade');

        // Wait for the animation to finish before redirecting
        setTimeout(() => {
            // Get the href attribute from the anchor tag inside the clicked 'item' and navigate
            window.location.href = item.querySelector('a').getAttribute('href');
        }, 1000);  // Match the duration of the fade-out animation
    });
});

// Event listener for navigating back to Page 1 (try.html)
switchBackBtn?.addEventListener('click', function () {
    // Apply fade-out animation to the current page
    document.body.classList.add('fade');

    // Wait for the animation to finish before redirecting
    setTimeout(() => {
        window.location.href = 'index.html';  // Redirect to Page 1
    }, 1000);  // Match the duration of the fade-out animation
});

GotoMain?.addEventListener('click', function () {
    // Apply fade-out animation to the current page
    document.body.classList.add('fade');

    // Wait for the animation to finish before redirecting
    setTimeout(() => {
        window.location.href = 'index.html';  // Redirect to Page 1
    }, 1000);  // Match the duration of the fade-out animation
});



TopLink?.addEventListener('click', function (event) {
    // Prevent the default action of the anchor tag (navigate to try2.html)
    event.preventDefault();

    // Apply fade-out animation to the current page
    document.body.classList.add('fade');

    // Wait for the animation to finish before redirecting
    setTimeout(() => {
        // Now redirect to 'try2.html' after the fade-out animation
        window.location.href = "Page2.html";
    }, 1000);  // Match the duration of the fade-out animation
});



// Set initial volumes for all audio elements
const audioElements = document.querySelectorAll('audio');
const buttonElement = document.querySelector('button');
audioElements.forEach(audio => {
    audio.volume = 0.3; // Adjust this value as needed
});

buttonElement.addEventListener('click', () => {
    audioElements.forEach(audio => {
        if (audio.paused) {
            audio.play(); // Play the audio if it is paused
        } else {
            audio.pause(); // Pause the audio if it is playing
        }
    });
});
// Add a click event listener to toggle the icon
buttonElement.addEventListener('click', () => {
    const icon = buttonElement.querySelector('i');

    // Check the current icon and toggle
    if (icon.classList.contains('bx-volume-full')) {
        icon.classList.remove('bx-volume-full');
        icon.classList.add('bx-pause');
    } else {
        icon.classList.remove('bx-pause');
        icon.classList.add('bx-volume-full');
    }
});
