let e=document.querySelector("#bookmarkInput"),t=document.querySelector("#addBookmarkBtn"),o=document.querySelector("#bookmarkList"),l="inputValue",a=JSON.parse(localStorage.getItem(l))||[];function u(e){o.innerHTML=e.map((e,t)=>`<li id="${t}">
                    <a href="#">${e}</a>
                    <div>
                    <button type="button">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                    </div>
                </li>`).join("")}function r(){localStorage.setItem(l,JSON.stringify(a))}u(a),t.addEventListener("click",()=>{let t=e.value;a.push(t),r(),e.value="",u(a)}),o.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let t=e.target.closest("li").id;a.splice(t,1),r(),u(a)});let n=document.querySelector("#username"),c=document.querySelector("#password");document.querySelector("#saveBtn").addEventListener("click",e=>{console.log(localStorage.setItem("login",n.value),localStorage.setItem("password",c.value))});let i=localStorage.getItem("login"),d=localStorage.getItem("password");n.value=i,c.value=d;
//# sourceMappingURL=hw-js-frontend4-8.15dfbac2.js.map
