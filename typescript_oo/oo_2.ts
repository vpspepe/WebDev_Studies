class Address {
    constructor(
        public street: string, 
        public number: number, 
        public city: string, 
        public state: string, 
        public country: string) {}
}

class User {
    // Após setado no contrutor, readonly attributes
    // não podem mais ser alterados
    private readonly name: string 
    private email: string
    private active: boolean = false
    private address: Address[] = []

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    public addAddress(address: Address): void {
        this.address.push(address);
    }

    public getAddresses(): Address[] {
        return this.address;
    }
}
 // Criando Array de usuários e endereços
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

// Adicionando endereços aos usuários
for (let i = 0; i < users.length; i++) {
    users[i].addAddress(addresses[i]);
    console.log(`User ${i}:\n`, users[i], "\n");
}


