function generateUniqueEmails(names, existingEmails) {
    const uniqueEmails = [];
    const emailSet = new Set(existingEmails);
    names.forEach(name => {
        const [firstName, lastName] = name.split(' ');
        let email = firstName.toLowerCase() + lastName[0].toLowerCase() + '@company.com';
        let count = 1;

        while (emailSet.has(email)) {
            email = firstName.toLowerCase() + lastName[0].toLowerCase() + count + '@company.com';
            count++;
        }

        emailSet.add(email);
        uniqueEmails.push(email);
    });

    return uniqueEmails;
}
const names = ["John Smith", "Jane Doe", "John Simpson", "Jane Davis"];
const existingEmails = ["johns@company.com", "janed1@company.com"];
const newEmails = generateUniqueEmails(names, existingEmails)
console.log(newEmails)
