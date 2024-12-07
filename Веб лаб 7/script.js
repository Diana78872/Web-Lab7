// Array to hold jokes from the file
let jokes = [];

// Load jokes using XMLHttpRequest
function loadJokesXMLHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'jokes.txt', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            jokes = xhr.responseText.split('\n');
            displayRandomJoke();
        } else {
            document.getElementById('joke').innerText = 'Error loading jokes.';
        }
    };
    xhr.send();
}

// Load jokes using jQuery
function loadJokesJQuery() {
    $.get('jokes.txt', function (data) {
        jokes = data.split('\n');
        displayRandomJoke();
    }).fail(function () {
        $('#joke').text('Error loading jokes.');
    });
}

// Display a random joke
function displayRandomJoke() {
    if (jokes.length > 0) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        document.getElementById('joke').innerText = jokes[randomIndex];
    }
}

// Event listener for button
document.getElementById('load-joke').addEventListener('click', () => {
    // Choose one method to load jokes:
    // Uncomment either one of these:
    // loadJokesXMLHttpRequest(); // XMLHttpRequest method
    loadJokesJQuery(); // jQuery method
});
