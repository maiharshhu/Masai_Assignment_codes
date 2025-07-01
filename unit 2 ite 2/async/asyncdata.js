function fetchUserData(callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
        console.log("User data received");
        callback();
    }, 1000);
}

function fetchUserPosts(callback) {
    console.log("Fetching user posts...");
    setTimeout(() => {
        console.log("User posts received");
        callback();
    }, 1500);
}

fetchUserData(() => {
    fetchUserPosts(() => {
        console.log("All data loaded successfully!");
    });
});