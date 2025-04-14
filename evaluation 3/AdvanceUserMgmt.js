let person = [
    { role: "admin", experience: 7, active: true, department: "IT" },
    { role: "user", experience: 3, active: true, department: "HR" },
    { role: "manager", experience: 5, active: true, department: "Sales" },
    { role: "user", experience: 2, active: false, department: "Marketing" },
    { role: "user", experience: 2, active: true, department: "Support" }
];

let adminRole = person.map(user => {
    let access = !user.active
        ? "Admin Access Revoked"
        : user.experience > 5
            ? (user.department === "IT" ? "Full IT Admin Access!" : "Full General Admin Access!")
            : "Limited Admin User Access!";
    return { ...user, access };

});

let managerRole = person.map(user => {
    let access = !user.active
        ? "Manager Access Revoked"
        : user.experience > 3
            ? (user.department === "Sales" ? "Full Sales Manager Access!" : "Full Manager Access!")
            : "Limited Manager Access!";
    return { ...user, access };
});

let userRole = person.map(user => {
    let access = !user.active
        ? "User Access Revoked"
        : user.department === "Support" ? "Priority Support Access!" : "User Access!";
    return { ...user, access };
});

let otherRole = person.map(user => {
    let access = !user.active
        ? "Access Revoked"
        : user.role !== "admin" && user.role !== "manager" && user.role !== "user"
            ? "Invalid Role"
            : "Valid Role";
    return { ...user, access };
});

console.log(adminRole);
console.log(managerRole);
console.log(userRole);
console.log(otherRole);