fetch('<https://jsonplaceholder.typicode.com/posts>', {
  method: 'GET',
  body: JSON.stringify({ userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
