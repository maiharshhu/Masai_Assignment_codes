function step1(params) {
    return new Promise((res)=>{
        setTimeout(() => {
            const result = "Task A completed"
            console.log(result);
            res(result);
        }, 1000); 
    });
}


function step2(Prevresult) {
    return new Promise((res)=>{
        setTimeout(() => {
            const result = "Task B Processed: " +Prevresult;
            console.log(result);
            res(result);
        }, 1000); 
    });
}



function step3(Prevresult) {
    return new Promise((res)=>{
        setTimeout(() => {
            const result = "Final result: "+Prevresult;
            console.log(result);
            res(result);
        }, 1000); 
    });
}

step1()
.then((result1)=>{
    return step2(result1);
})
.then((result2)=>{
    return step3(result2)
})
.catch((error)=>{
    console.error("Error occured")
})