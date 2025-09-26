"use strict";

/*console.log("Here we are!");

const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

/*const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']


const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']


const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.indexOf(pizzaName) === -1) {
            onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
        }
        else return onSuccess(pizzaName);
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError); 

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

    orderedItems.forEach((item) => {
        totalPrice += item;
    });
        

  // Change code above this line
  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

    numbers.forEach(item => {
        if (item > value) {
            filteredNumbers.push(item);
        }  
    })

  // Change code above this line
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); 

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

    firstArray.forEach(item => {
        if (secondArray.includes(item)) {
            commonElements.push(item);
        };
    });

  return commonElements;
  // Change code above this line
};

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); 


// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
};

console.log(calculateTotalPrice(8, 60));


const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
        totalPrice += item;
    });

    return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4])); 


// Change code below this line
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3));


const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Change code above this line
    return commonElements;
};

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


function changeEven(numbers, value) {
    // Change code below this line
    
    const newArray = [];

    numbers.forEach((element) => {
        if (element % 2 === 0) {
            element = element + value;
        }
        else if (element % 2 !== 0) {
        }
        newArray.push(element);
    })
    console.log(numbers);
    return newArray;
  // Change code above this line
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet => planet.length ));

console.log(planetsLengths);
console.log(planets); 


let users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = { name, email, eyeColor, friends, isActive, balance, skills, gender, age } = users
users.map(user => { user.name });   
const getUserNames = users => users.map(user => { user.name });
const getUserEmails = users => users.map(item=> item.email)
console.log(getUserEmails);
const getUserEmails = users =>users.map(element=>element.email);

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number=>number%2===0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(genre => genre.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter((genre, index, array)=>array.indexOf(genre)===index);
console.log(uniqueGenres);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
const booksByAuthor = books.filter(({author})=>author.includes(AUTHOR));

console.log(topRatedBooks);
console.log(booksByAuthor);

let users=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); 

const getUsersWithAge = (users, minAge, maxAge) => users.filter(({age}) =>  age>=minAge && age<=maxAge );

console.log(getUsersWithAge(users, 20, 30));

const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));

console.log(getUsersWithFriend(users, "Briana Decker"));*/

/*const getFriends = (users) => users.flatMap((item, index, array) => array.indexOf(item) === index);

const getFriends = (user_arg) => user_arg
    .flatMap(({ friends }) => friends)
    .filter((item, index, array) => array.indexOf(item) === index);

const getFriends = (users_arg) => users_arg
  .flatMap(({ friends }) => friends)
    .filter((friend, ind, arr) => arr.indexOf(friend) === ind);

onsole.log(getFriends(users));
console.log(getUniqueFriends);

const getActiveUsers = (users) => users.filter(({ isActive }) => isActive === true);


let users=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

const getInactiveUsers = (users) => users.filter(({isActive})=>isActive===false);

console.log(getInactiveUsers(users)); 

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((option)=>option.title ===BOOK_TITLE);
const bookByAuthor = books.find((option) => option.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor); 

let users=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getUserWithEmail = (users, email) => users.find((option) => option.email === email);

console.log(getUserWithEmail(users, "elmahead@omatom.com"));

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd); 


const isEveryUserActive = (users) => users.every((item)=>item.isActive===true);

console.log(isEveryUserActive(users));

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
console.log(anyElementInFirstIsEven);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);
console.log(anyElementInFirstIsOdd);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
console.log(anyElementInSecondIsEven);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);
console.log(anyElementInSecondIsOdd);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
console.log(anyElementInThirdIsEven);
const anyElementInThirdIsOdd = thirdArray.some(number=>number % 2 !== 0);
console.log(anyElementInThirdIsOdd); 


const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number)=>{
  return previousValue+number;
},0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime); 

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((acc, avarageTime)=>{
    return acc + avarageTime.playtime/avarageTime.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

const calculateTotalBalance = users.reduce((total, number) => {
    return total + number.balance;
}, 0);

console.log(calculateTotalBalance);



const getTotalFriendCount = users.reduce((total, friend) => {
    return total + friend.friends.length;
}, 0);

console.log(getTotalFriendCount)


const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates =[...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a,b) => b - a);
console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);
console.log(releaseDates); 

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));

console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
console.log(authorsInReversedOrder); 

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating-b.rating);
console.log(sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating-a.rating);
console.log(sortedByDescentingRating); 

const sortByAscendingBalance = (users) => [...users].sort((a, b) => a.balance - b.balance);
console.log(sortByAscendingBalance(users));

const sortByDescendingFriendCount = (users) => [...users].sort((a, b) => b.friends.length - a.friends.length);
console.log(sortByDescendingFriendCount(users));

const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByName(users));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = (books) => [...books]
    .sort((a, b) => a.author.localeCompare(b.author))
    .filter((a) => a.rating > MIN_BOOK_RATING)
    .map((a) => a.author)
    

console.log(names(books)); 

const getNamesSortedByFriendCount = (users) => [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
    

console.log(getNamesSortedByFriendCount(users));

const getSortedFriends = users => [...users]
    .flatMap(({ friends }) => friends)
    .filter((item, index,array)=>array.indexOf(item)===index)
    .sort()
    


console.log(getSortedFriends(users));




let users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

//let total = 0;

const getTotalBalanceByGender = (users, gender) => users
    .filter((option) => option.gender===gender) 
    .reduce((total,number) => {return total + number.balance;}, 0);

console.log(getTotalBalanceByGender(users, "male")); */

