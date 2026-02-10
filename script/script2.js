"use strict";

/*
Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5


function countCategories() {

    const categoriesList = document.querySelector('#categories');
    const items = categoriesList.querySelectorAll('.item')

    console.log('Number of categories:', categoriesList.children.length);

    let arrayItems = Array.from(items)
    
    arrayItems.forEach(item => { 
        const title = item.querySelector('h2').textContent;
        const elementsQty = item.querySelectorAll('li').length;
        console.log('Category:', title);
        console.log("Elements:", elementsQty)
    });
};
countCategories(); 


------------------

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    Додасть назву інгредієнта як його текстовий вміст.
    Додасть елементу клас item.
    Після чого, вставить усі
<li> за одну операцію у список ul#ingredients.

const ingredients = [
"Potatoes",
"Mushrooms",
"Garlic",
"Tomatos",
"Herbs",
"Condiments",
];

function createIngredientsList() {
    
    const ingredientsList = document.querySelectorAll('#ingredients');

    ingredients.forEach(ingredient => {

        //console.log(ingredientsList)

        const itemLi = document.createElement('li');
        itemLi.textContent = ingredient;
        console.log(itemLi);
        itemLi.classList.add('item');
        const header = document.createElement('h4');
        //header.textContent = "Header";
        //itemLi.append(header);

        ingredientsList[0].append(itemLi);
    })
    
};

createIngredientsList(); 
------------------
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.



const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const header = document.querySelector('h2');

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const galleryMarkup = images
    .map((image) => 
        `<li>
            <image alt=${image.alt} src=${image.url}></image>
        </li>`)
    .join('');

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

//console.log(galleryMarkup);


const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

------------------
Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.



let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

------------------
Завдання 5
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', (eve) => {
    const spanValue = eve.currentTarget.value;
    console.log(spanValue); 

    if (spanValue === '') {
        span.textContent = 'Anonymous';
    }
    else { span.textContent = spanValue }
});

------------------
Завдання 6
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.



const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    const inputValue = event.currentTarget.value;
    const requiredLength = Number(input.dataset.length);

    if (inputValue.length === requiredLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
       }}
);
-----------------
Завдання 7
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', (event) => {
    let rangeValue = event.currentTarget.value;
    console.log(rangeValue);
    span.style.fontSize = rangeValue +'px';
});
------------------
Завдання 8
Напиши скрипт управління формою логіна.

1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector('.login-form');
const input = document.querySelector('input');
console.log(input);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    console.log('emal:', email.value, 'password:', password.value);

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled');
        email.style.borderColor = '#f44336';
        password.style.borderColor = '#f44336';
    };
    event.currentTarget.reset();
});
--------------------

Завдання 9
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

console.log(button);

button.addEventListener('click', (event) => {
    body.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
-------------------

Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const refs = {
    input: document.querySelector('input'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxesDiv: document.querySelector('#boxes')
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


let inputValue = [];

refs.input.addEventListener("change", (eve) => {
    let number = [];
    //let number = 0;
        for (let i = 1; i <= eve.currentTarget.value; i += 1){
            number += [i];
            inputValue = [...number];
            console.log(inputValue);
    };
    });


function onSize() {
    let size = [];

    for (let i = 0; i<=100; i += 10){
        number = number + 10;
        console.log(number);
        return number;

    const divSize = inputValue.forEach(function (size) {
        size *= 1.1;
        //console.log(number);
        
    });
    return size;
    };


function onCreateBtnClick() {
    refs.createBtn.addEventListener('click', (eve) => {
        console.log("Button Create was clicked");

        let size = '30';

       const markup = inputValue
        .map((div) => `<div style="background-color:${getRandomHexColor()}; width:${onSize()}px; height:${onSize()}px; border:1px solid; border-color:${getRandomHexColor()}">${div}</div>`)
        .join('');

        refs.boxesDiv.insertAdjacentHTML("beforeend", markup);
        
    })
    };

function onDestroyBtnClick() {
    refs.destroyBtn.addEventListener('click', (eve) => {
        eve.preventDefault()
    console.log("Button Destroy was clicked");
        refs.boxesDiv.innerHTML = "";
        refs.input.value = "";
    });
};



onCreateBtnClick();
getRandomHexColor();
onDestroyBtnClick();
onSize();


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
});



const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
};

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}; 


const div = document.querySelector(".js-div");

div.addEventListener("click", onClick);

function onClick(evt) {

    //if (evt.target.nodeName !== "BUTTON") {
    //    return;
    //}
    
    if (!evt.target.classList.contains("btn")) {
        return
    }

    console.log("Clicked on", evt.target.textContent)
};

const addBtn = document.querySelector(".js-add-btn");

let labelCounter = Number(1);

addBtn.addEventListener("click", onAddBtnClick);

function onAddBtnClick() {
    
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = `Button ${labelCounter}`;
    btn.type = "button";

    div.appendChild(btn);
    labelCounter += 1;
};

const deleteBtn = document.querySelector(".js-delete-btn");

deleteBtn.addEventListener("click", onDeleteBtn);

function onDeleteBtn() {
    div.removeChild(div.lastElementChild);
};






const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    };

    /*const currentActiveBtn = document.querySelector(".tags__btn--active");

    currentActiveBtn?.classList.remove("tags__btn--active");

    const nextActiveBtn = event.target;
    nextActiveBtn.classList.add("tags__btn--active");
    selectedTag = nextActiveBtn.dataset.value;

    console.log(selectedTag);

    const btn = event.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains("tags__btn--active");

    if (isActive) {
        selectedTags.delete(tag);
    }
    else {
        selectedTags.add(tag)
    };

    btn.classList.toggle("tags__btn--active");

  //  selectedTags.add(event.target.dataset.value);

    console.log(selectedTags);
};


const colors = [
    { hex: "#f44336", rgb: "244, 67, 54", width: "200px", height: "200px"},
    { hex: "#e91e63", rgb: "233, 30, 99", width: "200px", height: "200px" },
    { hex: "#9c27b0", rgb: "156, 39, 176", width: "200px", height: "200px" },
    { hex: "#673ab7", rgb: "103, 58, 183", width: "200px", height: "200px" },
    { hex: "#3f51b5", rgb: "63, 81, 181", width: "200px", height: "200px" },
    { hex: "#2196f3", rgb: "33, 150, 243", width: "200px", height: "200px" },
    { hex: "#03a9f4", rgb: "3, 169, 244", width: "200px", height: "200px" },
    { hex: "#00bcd4", rgb: "0, 188, 212", width: "200px", height: "200px" },
    { hex: "#009688", rgb: "0, 150, 136", width: "200px", height: "200px" },
    { hex: "#4caf50", rgb: "76, 175, 80", width: "200px", height: "200px" },
    { hex: "#8bc34a", rgb: "139, 195, 74", width: "200px", height: "200px" },
    { hex: "#cddc39", rgb: "205, 220, 57", width: "200px", height: "200px" },
    { hex: "#ffeb3b", rgb: "255, 235, 59", width: "200px", height: "200px" },
    { hex: "#ffc107", rgb: "255, 193, 7", width: "200px", height: "200px" },
    { hex: "#ff9800", rgb: "255, 152, 0", width: "200px", height: "200px" },
    { hex: "#ff5722", rgb: "255, 87, 34", width: "200px", height: "200px" },
];

const paletteContainer = document.querySelector('.js-palette');
paletteContainer.insertAdjacentHTML('beforeend', createColorCardsMarkup(colors));

paletteContainer.addEventListener('click', onPaletteContainerClick);

//console.log(createColorCardsMarkup(colors));


function createColorCardsMarkup(colors) {
    return colors
        .map(({ hex, rgb, width, height }) => {
            return `
        <div class="color-card"
        style="border:#4caf50 2px solid;
        display:flex; flex-direction:column;">
        <div 
            class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex}; 
            height: ${height};
            width: ${width}";
        ></div>
         <div class="color-meta" style="background-color:#f0f0f0; padding:8px; text-align:center;">
            <p>HEX: "${hex}"</p>
            <p>RGB: "${rgb}"</p>
        </div>
    </div> `;
    })
        .join('');  
};

function onPaletteContainerClick(event) {
    if (!event.target.classList.contains("color-swatch")) {
        return;
    }

    const parentColorCard = event.target.closest(".color-card");
    
    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(event.target.dataset.hex);
};

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
};

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector(".color-card.is-active");

    if (currentActiveCard) {
        currentActiveCard.classList.remove("is-active");
    }
};

function addActiveCardClass(card) {
    card.classList.add("is-active"); 
};



const tech = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JavaScript" },
    { label: "React" },
    { label: "Node.js" },
    { label: "Vue" },
    { label: "Next.js" },
    { label: "Mobx" },
    { label: "Redux" },
    { label: "React Router" },
    { label: "GraphQL" },
    { label: "MongoDB" },
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

function createTechListItemsMarkup(items) {
    return items.map(item=>`<li>${item.label}</li>`).join('');
};

const listItemsMarkup = createTechListItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

refs.input.addEventListener('input', onFilterChange);

function onFilterChange(event) {
    const filter = event.currentTarget.value.toLowerCase();

    console.log(filter);

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

    return refs.list.innerHTML = createTechListItemsMarkup(filteredItems);
}; 



*/

if ("loading" in HTMLImageElement.prototype) {
    console.log("Browser supports lazy loading");

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });

} else {
    console.log("Browser DOES NOT support lazy loading");

    addLazySizesScript();
};

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoad, { once: true });
});

function onImageLoad(event) {
    console.log("Фото завантажено");
};

function addLazySizesScript() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossorigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);
};