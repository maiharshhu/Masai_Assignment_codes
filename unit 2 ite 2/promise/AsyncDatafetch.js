function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let num = Math.random() * 10;   
            
            if(num>0.5){
                resolve("Condition Met!")
            }
            else{
                reject("Sorry Condition not met!")
            }
            },1000)
        });
}

    
    async function fetchDataHandler() {
        try{
            const response = await fetchData() 
            console.log("Fetch data successfully!")
        }
        catch(error){
            console.error(error);
            console.log("problem while fetching data")
        }
    }

fetchDataHandler();