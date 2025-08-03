const API_URL = 'https://688f9ca7f21ab1769f89b17c.mockapi.io/users/users'; 

const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const userList = document.getElementById('user-list');

//  1. Fetch and display all users
function fetchUsers() {
  userList.innerHTML = 'Loading...';
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      displayUsers(data);
    })
    .catch(err => {
      userList.innerHTML = 'Error fetching users.';
      console.error(err);
    });
}

// 2. Display users
function displayUsers(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
    userList.appendChild(div);
  });
}

// 📤 3. Submit form - POST request
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) return;

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  })
    .then(res => res.json())
    .then(data => {
      nameInput.value = '';
      emailInput.value = '';
      fetchUsers(); //  Refresh list
    })
    .catch(err => {
      alert('Error adding user');
      console.error(err);
    });
});

fetchUsers(); // initial fetch
