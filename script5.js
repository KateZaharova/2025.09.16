'use strict'

/*
// Петя біжить швидко, тому що Петя намагається зловити поїзд.
const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

petya.showName();


const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ} 


const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Big Mike")); 


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] 

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); 


const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

console.log(child.hasOwnProperty("surname")); 


class Car {
  // Change code below this line

constructor (brand, model, price){
  this.model=model;
  this.brand=brand;
  this.price=price;
}

  // Change code above this line
};
console.log(new Car("BMW", "X5", 58900));

class Storage{
  constructor(items){
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {

    if (this.items.indexOf(itemToRemove) !== -1) {
      this.items.splice(this.items.indexOf(itemToRemove), 1)
    }
    
    return this.items;
  }
};


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]  


class StringBuilder{
  constructor( initialValue ) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value=this.value + str
      
  }
  padStart(str) {
     this.value= str+this.value;
  }
  padBoth(str) {
    this.value= str+this.value+str;
  }

}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=". 


class Car {
  // Change code below this line
  #brand;
  model;
  price;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    return this.#brand = newBrand;
  }

  // Change code above this line
};

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); 


class Car {
  // Change code below this line
  #price;
  static MAX_PRICE = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {

    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
      return;
    } 
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line

  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
}

  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum" 

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User{
  static AccessLevel={
    BASIC: "basic",
    SUPERUSER: "superuser"
  }
};

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER); 


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  accessLevel;

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    
  };

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser" 

class User {
  email;

  constructor(email) {
    this.email = email;
  }


  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails=[];
  
  constructor({ email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    return this.blacklistedEmails.push(email);
  };

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  };
  

  // Change code above this line
}


const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true. 


console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);  

const textEl = document.querySelector(".article-text");
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector(".article-title");
titleEl.textContent = 'Welcome to Bahamas!';

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList); 

const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("width", 400);

console.log(image.getAttribute("alt")); // Amazing nature 

const saveBtn = document.querySelector('button[data-action="saveButton"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="closeButton"]');
console.log(closeBtn.dataset.action); // "close"


const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

const headerOne = document.querySelector(".header");
console.log(headerOne);

const headerSecond = document.createElement("h2");
headerSecond.textContent = "Finally it is Thursday!";
headerOne.after(headerSecond);

const headerThird = document.createElement("h3");
headerThird.textContent = "Before all this:";
headerOne.before(headerThird);
headerThird.remove(); 


const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

text.innerHTML = "New <strong>better</strong> day!"  


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup; 


const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js", "Word"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>"); 

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);  

const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector(".target-btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
}); 

const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick); 

const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});


document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
}); 


document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn)

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}


document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
}); 

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
};



const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;

  const selectedOptionIndex = event.currentTarget.selectedIndex;

  const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;


  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}


const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});


const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});



const colorPickerOptions = [
  { label: "red", color: "#F44336", width:"100px", display:"flex", align:"center" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D88" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" }
];

const option = colorPickerOptions[2];
const header = document.querySelector("h1");
const containerEl = document.querySelector(".container");



const elements = colorPickerOptions.map(item => {
  const buttonEl = document.createElement('button');
  buttonEl.type = "button";
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  

  return buttonEl;
});

header.append(...elements);

console.log(elements);

//header.append(buttonEl);


const product = {
  name: "Sky",
  description: "Lorem, ipsum...",
  price: 2000,
  available: true,
  onSale: true,
};

const productEl = document.createElement('article');
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
nameEl.classList.add("product__name");

const descrEl = document.createElement('p');
descrEl.textContent = product.description;
descrEl.classList.add("product__descr")

const priceEl = document.createElement('p');
priceEl.textContent = `Цена: ${product.price} грн`;
priceEl.classList.add("product__price");


productEl.append(nameEl, descrEl, priceEl);

console.log(productEl); */

