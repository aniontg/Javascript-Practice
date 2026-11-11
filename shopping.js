// alert("Welcome to my shop");

// const itemA = "Rice";
// const itemB = "Beans";
// const itemC = "Garri";

// const priceA = 350;
// const priceB = 400;
// const priceC = 200;

// let itemToBuy = prompt(
//   "What do you want to purchase today (Put in either of the following (Rice, Beans, Garri))\n 1, Rice \n 2. Beans \n 3. Garri",
// );

// if (itemToBuy === "Rice") {
//   itemToBuy = priceA;
// } else if (itemToBuy === "Beans") {
//   itemToBuy = priceB;
// } else if (itemToBuy === "Garri") {
//   itemToBuy = priceC;
// } else {
//   console.log("Item does not exist in our store");
// }

// const cupsQuantity = prompt("How many cups do you want to purchase?");

// let totalPrice;

// if (isNaN(cupsQuantity)) {
//   console.log("You did not put a valid number for the cups");
// } else if (!isNaN(cupsQuantity)) {
//   totalPrice = cupsQuantity * itemToBuy;
//   console.log(totalPrice);
// }

// const walletBalance = Number(prompt("What is your bubget"));
// console.log(walletBalance);
// console.log(totalPrice);

// if (walletBalance >= totalPrice) {
//   let newBalance = walletBalance - totalPrice;
//   console.log(
//     "The item was bought and your new balance is" + " " + "₦" + newBalance,
//   );
// } else if (walletBalance < totalPrice) {
//   console.log("Insufficient funds");
// } else {
//   console.log("Invalid Answer");
// }

// const firstName = "Ebuka";
// const lastName = "Edward";
// const school = "Skillboost";

// const fullNameSchool = firstName + "" + "" + "and i attend" + "" + school;

// const fullNameSchool2 = `My name is ${firstName} ${lastName} and I attend ${school} `;

// console.log(fullNameSchool);
// console.log(fullNameSchool2);

// console.log(fullNameSchool.length);
// console.log(fullNameSchool.charAt(0));
// console.log(fullNameSchool.indexOf("E"));

// function greetUser() {
//   console.log("Welcome User");
// }
// greetUser();

// function greetUserWithName(user = "user") {
//   //   console.log(`Welcome ${user}`);

//   return `Welcome ${user}`;
// }

// greetUserWithName();
// greetUserWithName("Praise");

// function addNum(a, b) {
//   console.log(`Your sum is ${a + b}`);
// }
// addNum(4, 20);

// function multiplyNum(a, b) {
//   console.log(`${a * b}`);
// }
// multiplyNum(4, 20);

// function divideNum(a, b) {
//   console.log(`${a / b}`);
// }
// divideNum(20, 4);

// function subtractNum(a, b) {
//   console.log(`${a - b}`);
// }
// subtractNum(20, 4);

// function arithmetic(a, b) {
//   let choice = prompt(
//     "What arithmetic operation do you want to do \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division",
//   );
//   a = Number(prompt("Put in your first number"));
//   b = Number(prompt("Put in your second number"));

//   if (choice.toLowerCase() === "addition") {
//     addNum(a, b);
//   } else if (choice.toLowerCase() === "subtraction") {
//     subtractNum(a, b);
//   } else if (choice.toLowerCase() === "multiplication") {
//     multiplyNum(a, b);
//   } else if (choice.toLowerCase() === "division") {
//     divideNum(a, b);
//   } else {
//     console.log("Your choice is invalid");
//   }
// }

// // arithmetic();

// const greetUserWithDate = `${greetUserWithName("Favour")} and today is ${new Date()}`;
// console.log(greetUserWithDate);

// // console.log(greetUserWithName("Anointed"));

// const greetFAvStud = greetUserWithName("Daniel");
// console.log(greetFAvStud);

// // --------------------OBJECTS-----------------------------
// const firstName = "Praise";
// const lastName = "Favour";

// const person = {
//   firstName: "Amaka",
//   lastName: "Joy",
//   gender: "female",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   isMarried: function (newLastName) {
//     if (this.gender.toLowerCase() === "female") {
//       return (this.lastName = newLastName);
//     }
//   },
// };

// person.nationality = "Nigeria";
// console.log(person);
// console.log(person.gender);

// person.isMarried("John");
// console.log(person.fullName());

// function Person(firstName, lastName, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
// }

// const person1 = new Person("Praise", "Skillboost", "female");
// const person2 = new Person("Chijiendu", "Skillboost", "male");

// console.log(person1.firstName);
// console.log(person2.firstName);

// ----------------------------------ARRAYS---------------------------------

// const states = ["Abia", "Rivers", "Osun"];

// console.log(states[0]);

// console.log(states[2]);

// console.log(states.length);

// states.push("Calabar");
// states.push("Anambra");

// states.pop();

// states.unshift("Lagos");
// states.unshift("Kaduna");

// states.shift();

// console.log(states.join("+"));

// const updatedStates = states.concat(["Bauchi", "Kaduna"]);
// console.log(updatedStates);

// states.splice(2, 0, "Akwa Ibom", "Bayelsa");

// const arraySliced = states.slice(2, 4);
// console.log(arraySliced);
// console.log(states);

// const books = ["Dictonary", "Obi goes to school", "Harry  Potter"];

// const choice = prompt(
//   "What do you want to do? \n 1. Add book \n 2. Edit Book \n 3. Delete Book \n (Please use either 1, 2, 3)",
// );

// if (choice == 1) {
//   const newBook = prompt(
//     "What book do you want to add? Please put in the name",
//   );

//   books.push(newBook);
//   console.log(books);
// } else if (choice == 2) {
//   const editBook = prompt(
//     "Select a book from your library that you want to edit",
//   );

//   const indexOfEditBook = books.indexOf(editBook);

//   if (indexOfEditBook != -1) {
//     const newEditTitle = prompt("What is the new name of the book?");
//     books.splice(indexOfEditBook, 1, newEditTitle);
//     console.log(books);
//   } else {
//     console.log(`${editBook} does not exist in your library`);
//   }
// } else if (choice == 3) {
//   const deleteBook = prompt(
//     "Select a book from your library that you want to delete",
//   );
//   const indexOfDeleteBook = books.indexOf(deleteBook);

//   if (indexOfDeleteBook != -1) {
//     books.splice(indexOfDeleteBook, 1);
//     console.log(books);
//   } else {
//     console.log(`${deleteBook} does not exist in your library`);
//   }
// }

// ------------------------ARRAY METHODS-----------------------------

// const fruits = ["Orange", "Mango", "Banana"];

// console.log(fruits[0]);

// console.log(`I sell ${fruits}`);

// for (let fruit of fruits) {
//   console.log(`I love eating ${fruit}`);
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 200; i += 2) {
//   console.log(i)
// }
// for (let m = 0; m <= 200; m++) {
//   if (m % 2 === 0) {
//     console.log(m);
//   }
// }

// for (let p = 0; p <= 20; p++) {
//   if (p % 3 === 0) {
//     console.log(p);
//   }
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`I eat ${fruits[i]}`);
// }

// for (let fruit in fruits) {
//   console.log(`I love ${fruits[fruit]}`);
// }

// fruits.forEach(function (fruit, id, arr) {
//   console.log(`I sell ${fruit}`);
// });

// const students = [
//   { name: "Anthony", path: "Backend" },
//   { name: "Praise", path: "UI / UX" },
// ];

// students.forEach(function (student, id, arr) {
//   console.log(`Welcome ${student.name}. Your course path is ${student.path}`);
// });

// -------------ASSESSMENT--------------

const product = [
  {
    name: "Dell Laptop",
    price: "₦300000",
    percentage: "20%",
    rating: "4.5",
    quantity: 1,
  },
  {
    name: "Charger",
    price: "₦10000",
    percentage: "20%",
    rating: "4.5",
    quantity: 2,
  },
  {
    name: "Electric Iron",
    price: "₦45000",
    percentage: "20%",
    rating: "4.5",
    quantity: 1,
  },
  {
    name: "Air Conditioner",
    price: "₦300000",
    percentage: "20%",
    rating: "4.5",
    quantity: 2,
  },
  {
    name: "Samsung 32' Television",
    price: "₦250000",
    percentage: "20%",
    rating: "4.5",
    quantity: 1,
  },
];

product.forEach(function (item) {
  const price = Number(item.price.replace("₦", ""));
  const percentage = Number(item.percentage.replace("%", ""));
  const discountAmount = (price * percentage) / 100;
  const discountedPrice = price - discountAmount;

  console.log(
    `${item.name}: Discount = ₦${discountAmount}, Discounted price = ₦${discountedPrice}`,
  );
});

function Product(name, price, discountPercentage, rating) {
  this.name = name;
  this.price = price;
  this.discountPercentage = discountPercentage;
  this.rating = rating;
}

const products = [
  new Product("Yara", 9000, 2, 4),
  new Product("Club De Nuit", 12000, 5, 4.5),
  new Product("Smart 133", 3500, 2, 3),
  new Product("Sugar Baby", 2000, 10, 2),
];

console.log(products);

products.forEach(function (item, id, arr) {
  let discountedPrice =
    item.price - (item.price * item.discountPercentage) / 100;
  console.log(
    `${id + 1}. The price for ${item.name} is N${item.price}, but you can get it at N${discountedPrice}. ${item.name} has a rating of ${item.rating}.`,
  );
});

const numbers = [10, 20, 30, 40, 50];

const numbersDoubled = numbers.forEach(function (num, id, arr) {
  return num * 2;
});

const numbersDoubled2 = numbers.map(function (num, id, arr) {
  return num * 2;
});

console.log(numbersDoubled);
console.log(numbersDoubled2);

const budgetProducts = products.filter(function (value, id, arr) {
  return value.price <= 5000;
});

console.log(budgetProducts);
