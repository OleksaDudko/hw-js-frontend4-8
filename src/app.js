const inputEl = document.querySelector("#bookmarkInput");
const btnEl = document.querySelector("#addBookmarkBtn");
const listEl = document.querySelector("#bookmarkList");
const arr = [];

btnEl.addEventListener("click", () => {
    const data = {
        value: inputEl.value
    };
    arr.push(data);
    console.log(arr);
    addObj(arr);
});

function addObj(arr) {
    const item = arr.map((item, index) => {
        return `<li>
                    <a href="$">${item.value}</a>
                    <button type="button" data-index="${index}">Видалити</button>
                </li>`;
    }).join("");
    listEl.innerHTML = item;
}

listEl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        arr.splice(index, 1);
        addObj(arr);
    }
});

// ==========================================================

const nameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const saveEl = document.querySelector("#saveBtn");

saveEl.addEventListener("click", (event) => {
    const localName = localStorage.setItem("login", nameEl.value);
    const localPassword = localStorage.setItem("password", passwordEl.value);
    console.log(localName, localPassword);
})

const savedLogin = localStorage.getItem("login");
const savedPassword = localStorage.getItem("password");

nameEl.value = savedLogin;
passwordEl.value = savedPassword

// =========================================================

import {products} from "./data";
import template from "./products-template.hbs";

const listRef = document.querySelector(".list");
listRef.innerHTML = template({products});

const searchEl = document.querySelector(".search");
const filtrationEl = document.querySelector(".filtration");

filtrationEl.addEventListener("click", (event) => {
    const findProduct = searchEl.value;
    products.incudes("findProduct.name");
})