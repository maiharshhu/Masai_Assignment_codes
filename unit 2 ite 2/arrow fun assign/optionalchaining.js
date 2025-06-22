const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };

// let {id, profile:{name, address:{city,zipcode}}} = user

let { id, profile, profile: { address } } = user;

console.log(`User ${profile.name} (ID:${id}) lives in ${address?.city ?? "Information not available"} 
    (ZIP: ${address?.zipcode ?? "Information not avaliable"}) `)