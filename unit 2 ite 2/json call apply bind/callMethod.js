let infobj = {
    name:"rider",
    age:32,
}

let infobj1 = {
    name:"simon",
    age:25,
}


function personinfo(){
    console.log(`Name is ${this.name} and age is ${this.age}`)
}

personinfo.call(infobj)
personinfo.call(infobj1)
