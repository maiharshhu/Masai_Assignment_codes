function Loadingsrn() {
    let ld = setInterval(()=>{
        console.log("Loading...")
    },1000);

    setTimeout(()=>{
        clearInterval(ld);
        console.log("Loaded successfully!")
    },5000);
}

Loadingsrn()