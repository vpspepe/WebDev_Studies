class Address {
    constructor(
        public street: string, 
        public number: number, 
        public city: string, 
        public state: string, 
        public country: string) {}
}

class User {
    name: string
    email: string
    active: boolean = false
    address: Address

    constructor(name: string, email: string, address: Address, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.active = active;
    }
}

const address_1 = new Address("Rua 1", 123, "São Paulo", "SP", "Brasil");
const address_2 = new Address("Rua 2", 456, "São Paulo", "SP", "Brasil");
const address_3 = new Address("Rua 3", 789, "São Paulo", "SP", "Brasil");

const user1 = new User("Victor", "user1@gmail.com", address_1, truek);
const user2 = new User("Victor", "user1@gmail.com", address_2, truek);
const user3 = new User("Victor", "user1@gmail.com", address_3, truek);
console.log(user1, user2, user3);