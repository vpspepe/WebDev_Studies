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
    function User(name, email, address, active) {
        if (active === void 0) { active = false; }
        this.active = false;
        this.name = name;
        this.email = email;
        this.address = address;
        this.active = active;
    }
    return User;
}());

var address_1 = new Address("Rua 1", 123, "São Paulo", "SP", "Brasil");
var address_2 = new Address("Rua 2", 456, "São Paulo", "SP", "Brasil");
var address_3 = new Address("Rua 3", 789, "São Paulo", "SP", "Brasil");
var user1 = new User("Victor", "user1@gmail.com", address_1, true);
var user2 = new User("Victor", "user1@gmail.com", address_2, true);
var user3 = new User("Victor", "user1@gmail.com", address_3, true);

console.log(user1, user2, user3);
