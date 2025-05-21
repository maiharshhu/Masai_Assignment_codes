let user = {
    username:"Harsh",
    showUsername: function() {
        console.log("Method",this.username);
    }
}

function showUserName() {
    console.log("Function",this.username);
}

user.showUsername(); // Method Harsh
showUserName(); // Function undefined