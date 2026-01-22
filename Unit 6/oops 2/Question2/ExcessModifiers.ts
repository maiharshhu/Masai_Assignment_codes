class User {
    public name: string;
    private orgCode: string = "DuckCorp";
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        // Can access private orgCode because we are inside the User class
        console.log(`I am ${this.name} from ${this.orgCode}`);
    }
}

class Manager extends User {
    getRole() {
        // Can access role because it is protected
        console.log(this.role);
    }

    /* checkOrg() {
        console.log(this.orgCode); // ERROR: Property 'orgCode' is private
    } 
    */
}

// Execution
const myManager = new Manager("Daffy", "Manager");

myManager.introduce(); // Output: I am Daffy from DuckCorp
myManager.getRole();    // Output: Manager

// console.log(myManager.orgCode); // ERROR: Property 'orgCode' is private