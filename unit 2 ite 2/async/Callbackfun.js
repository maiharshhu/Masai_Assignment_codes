function taskTwo(callback) {
    console.log("Task 2 completed");
    callback();
}

function taskOne() {
    console.log("Task 1 completed");
}

taskTwo(taskOne);