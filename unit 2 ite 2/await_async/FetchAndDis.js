async function fetchData() {
    try{
        //getting data using ftech via url with await  
        const resp = await fetch("https://fakestoreapi.com/products");

        // if any problem in url or unable to get data then we get error with error code
        if(!resp.ok){
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        // storing data in object format 
        const data = await resp.json();
        // to get total price of product we use reduce method
        const sum = data.reduce((acc,cur)=>{ 
            return acc+cur.price},0)
        console.log("Total price of products is:-",Math.round(sum))
    }
    catch(error){
        console.error("Error fetching data:",error);
        throw error;
    }
}

fetchData()