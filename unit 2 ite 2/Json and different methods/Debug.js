let students = ["Alice", "Bob", "Charlie"];

function studentinfo() {}

studentinfo.addstud = function(arr, name, pos) {
    arr.splice(pos, 0, name);
    return arr;
}

studentinfo.check = function(arr, name) {
    return arr.includes(name);
}

studentinfo.sepaw = function(arr) {
    return arr.join(",");
}


studentinfo.addstud(students, "hari", 1); 
console.log(students); 

console.log(studentinfo.check(students, "Bob")); 

console.log(studentinfo.sepaw(students)); 