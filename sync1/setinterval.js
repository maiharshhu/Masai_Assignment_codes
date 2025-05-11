let st = setInterval(()=>{
    console.log("Loading.....");
}, 1000)

setTimeout(() => {
    clearInterval(st);
    console.log("Loading complete!");
}, 5000);