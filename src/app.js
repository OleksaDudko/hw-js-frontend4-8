// const inputEl = document.querySelector("#bookmarkInput");
// const btnEl = document.querySelector("#addBookmarkBtn");
// const listEl = document.querySelector("#bookmarkList");
// const arr = [];

// btnEl.addEventListener("click", () => {
//     const data = {
//         value: inputEl.value
//     }
//     arr.push(data);
//     console.log(arr);
//     addObj(arr)
// })

// function addObj(arr) {
//     const item = arr.map((item) => {
//         return `<li>
//                     <a href="">${item.value}</a>
//                     <button type="button">Видалити</button>
//                 </li>`
//     }).join("")
//     listEl.innerHTML = item;
// }


// listEl.addEventListener("click", (event) => {
//     const btn = event.target.closest("button");
//     if (btn) {
//         const id = btn.dataset.id;
//         arr.splice(id, 1);
//         addObj(arr);
//     }
// });

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
