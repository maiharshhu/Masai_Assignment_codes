let user = {
    name :"rahul",
    getusername: function(){
        console.log("Method:",this.name);
    }
}

let getName = function(){
    console.log("Function", this.name);
}

user.getusername();
getName();