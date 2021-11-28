// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id,name, surname , email, phone ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(5, 'Michael', 'Meier', 'meier@gmail.com', '+4901598659325');
console.log(user);


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(5, 'Michael', 'Meier', 'maier@gmail.com', '+4901598659325'),
    new User(8, 'Maria', 'Baum', 'baum@gmail.com', '+4901438659453'),
    new User(12, 'George', 'Smith', 'smith@gmail.com', '+01598574725'),
    new User(3, 'Sandra', 'Meier', 'maiers@gmail.com', '+426564665567'),
    new User(6, 'Lena', 'Peterson', 'peterson@gmail.com', '+15698659545'),
    new User(9, 'Thomas', 'Bauer', 'bauer@gmail.com', '+453498659325'),
    new User(7, 'Kate', 'Smith', 'smithkate@gmail.com', '+101656465988'),
    new User(2, 'Andreas', 'Schwarz', 'schwarz@gmail.com', '+4904535655345'),
    new User(16, 'Laura', 'Braun', 'braun@gmail.com', '+490566656546'),
    new User(10, 'Alexander', 'Schmidt', 'schmidt@gmail.com', '+494459865987')
];
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let result = users.filter((value) => {
    if (value.id % 2 === 0) {
        return value;
    }
});
console.log(result);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let result2 = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(result2);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
  constructor(id, name, surname , email, phone, order) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.order = order;
  }
}

let client = new Client(5, 'Michael', 'Meier', 'maier@gmail.com', '+4901598659325', ['laptop', 'phone', 'headphones']);
console.log(client);


// створити пустий масив, наповнити його 10 об'єктами Client

let clientArray = [
        new Client(5, 'Michael', 'Meier', 'maier@gmail.com', '+4901598659325', ['laptop', 'phone', 'headphones']),
        new Client(8, 'Maria', 'Baum', 'baum@gmail.com', '+4901438659453', ['laptop', 'phone', 'headphones', 'fridge']),
        new Client(12, 'George', 'Smith', 'smith@gmail.com', '+01598574725', ['laptop', 'phone']),
        new Client(3, 'Sandra', 'Meier', 'maiers@gmail.com', '+426564665567', ['laptop', 'phone', 'watches', 'bicycle', 'toothbrush']),
        new Client(6, 'Lena', 'Peterson', 'peterson@gmail.com', '+15698659545', ['laptop', 'phone', 'headphones', 'watches']),
        new Client(9, 'Thomas', 'Bauer', 'bauer@gmail.com', '+453498659325', ['laptop', 'phone', 'headphones', 'scooter', 'fridge', 'violin']),
        new Client(7, 'Kate', 'Smith', 'smithkate@gmail.com', '+101656465988', ['laptop', 'phone']),
        new Client(2, 'Andreas', 'Schwarz', 'schwarz@gmail.com', '+4904535655345', ['laptop', 'phone', 'headphones', 'piano']),
        new Client(16, 'Laura', 'Braun', 'braun@gmail.com', '+490566656546', ['laptop', 'phone', 'headphones']),
        new Client(10, 'Alexander', 'Schmidt', 'schmidt@gmail.com', '+494459865987', ['laptop', 'phone', 'headphones', 'piano', 'violin'])
];

console.log(clientArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort = clientArray.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.log(sort);