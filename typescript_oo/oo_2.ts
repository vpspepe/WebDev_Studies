class Address {
    constructor(
        public street: string, 
        public number: number, 
        public city: string, 
        public state: string, 
        public country: string) {}
}

export class User {
    name: string
    email: string
    active: boolean = false
    address: Address[] = []

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    addAddress(address: Address): void {
        this.address.push(address);
    }

    getAddresses(): Address[] {
        return this.address;
    }
}

const users: User[] = [
    new User("Victor", "user1@gmail.com", true),
    new User("Victor", "user1@gmail.com", true),
    new User("Victor", "user1@gmail.com", true)
];

const addresses: Address[] = [
    new Address("Rua 1", 123, "São Paulo", "SP", "Brasil"),
    new Address("Rua 2", 456, "São Paulo", "SP", "Brasil"),
    new Address("Rua 3", 789, "São Paulo", "SP", "Brasil")
];

for (let i = 0; i < users.length; i++) {
    users[i].addAddress(addresses[i]);
    console.log(`User ${i}:\n`, users[i], "\n");
}
