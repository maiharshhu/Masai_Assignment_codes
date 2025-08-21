const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Array of background image URLs
const backgrounds = [
    "https://images.pexels.com/photos/31785128/pexels-photo-31785128.jpeg",
    "https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg",
    "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg",
    "https://images.pexels.com/photos/33511530/pexels-photo-33511530.jpeg",
    "https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg",
    "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
    "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
    "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

// Change immediately on load
changeBackground();

// Repeat every 5 seconds
setInterval(changeBackground, 3000);
