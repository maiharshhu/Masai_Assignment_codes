const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

let result = JSON.parse(JSON.stringify(user))
console.log(result)