const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

const {name, address:{city, street:{number}}} = people[0];
console.log(name); // Alice 
console.log(street.name); // Alice 