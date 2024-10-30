var Address = /** @class */ (function () {
    function Address(street, number, city, state, country) {
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    return Address;
}());
var User = /** @class */ (function () {
    function User(name, email, active) {
        if (active === void 0) { active = false; }
        this.active = false;
        this.address = [];
        this.name = name;
        this.email = email;
        this.active = active;
    }
    User.prototype.addAddress = function (address) {
        this.address.push(address);
    };
    User.prototype.getAddresses = function () {
        return this.address;
    };
    return User;
}());
// Criando Array de usuários e endereços
var users = [
    new User("Victor", "user1@gmail.com", true),
    new User("Victor", "user1@gmail.com", true),
    new User("Victor", "user1@gmail.com", true)
];
var addresses = [
    new Address("Rua 1", 123, "São Paulo", "SP", "Brasil"),
    new Address("Rua 2", 456, "São Paulo", "SP", "Brasil"),
    new Address("Rua 3", 789, "São Paulo", "SP", "Brasil")
];
// Adicionando endereços aos usuários
for (var i = 0; i < users.length; i++) {
    users[i].addAddress(addresses[i]);
    console.log("User ".concat(i, ":\n"), users[i], "\n");
}
