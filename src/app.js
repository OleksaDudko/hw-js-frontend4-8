const inputEl = document.querySelector("#bookmarkInput");
const btnEl = document.querySelector("#addBookmarkBtn");
const listEl = document.querySelector("#bookmarkList");
const arr = [];

btnEl.addEventListener("click", () => {
    const data = {
        value: inputEl.value
    }
    arr.push(data);
    console.log(arr);
    addObj(arr)
})

function addObj(arr) {
    const item = arr.map((item) => {
        return `<li>
                    <a href="">${item.value}</a>
                    <button type="button">Видалити</button>
                </li>`
    }).join("")
    listEl.innerHTML = item;
}


listEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (btn) {
        const index = btn.dataset;
        arr.splice(index, 1);
        addObj(arr);
    }
});

