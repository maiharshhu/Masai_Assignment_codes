fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log(data);
    const names = data.map(user=>user.name)
    console.log(names)

  })
  .catch(error => {
    console.error('Error:', error);
  });