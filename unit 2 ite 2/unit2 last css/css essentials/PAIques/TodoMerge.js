const fs = require('fs').promises;
const https = require('https');
const util = require('util');

function fetchTodosCallback(userId, cb) {
  https.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => cb(null, JSON.parse(data)));
  });
}


const fetchTodos = util.promisify(fetchTodosCallback);


async function enrichUsers() {
  const raw = await fs.readFile('./data/users.json', 'utf8');
  const users = JSON.parse(raw);

  const allTodos = await Promise.all(users.map(user => fetchTodos(user.id)));

  users.forEach((user, index) => {
    const todos = allTodos[index];
    user.total = todos.length;
    user.completed = todos.filter(t => t.completed).length;
  });

  await fs.writeFile('./output/users-full.json', JSON.stringify(users, null, 2));
}
enrichUsers();
