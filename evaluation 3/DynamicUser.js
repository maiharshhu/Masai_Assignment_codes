// Create an array of users instead of duplicate keys
const users = [
    { name: "roman", role: "admin", active: "true" },
    { name: "bob", role: "user", active: "true" },
    { name: "susan", role: "admin", active: "false" },
    { name: "jane", role: "user", active: "false" }
];

const userUpdate = users.map(user => ({
    ...user,
    access: user.role === "admin" && user.active === "true" ? "Admin Access Granted!" : "Admin Access Revoked",
    active: user.role === "user" && user.active === "true" ? "User Access Granted!" : "User Access Revoked",
}));

console.log(userUpdate);
console.log(users);