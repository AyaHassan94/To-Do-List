var add = document.querySelector("#add");
var todo = document.querySelector("#todo-list");
var complete = document.querySelector("#completed-list");
var text = document.querySelector("input");
todo.innerHTML = localStorage.add;
complete.innerHTML = localStorage.add2;
add.addEventListener("click", (e) => {
  if (text.value == "") {
    alert("plz enter text");
  } else {
    todo.innerHTML += `<li><Image src="remove.png" width="30px" height="30px"  class="rem"></image><input type="checkbox" class="myCheck"  ></input><p>${text.value}</p></li>`;
    localStorage.setItem("add", todo.innerHTML);
  }
});
todo.addEventListener("click", (event) => {
  if (event.target.className == "rem") {
    todo.removeChild(event.target.parentNode);
    localStorage.setItem("add", todo.innerHTML);
  } else if (event.target.className == "myCheck") {
    console.log(event);
    todo.removeChild(event.target.parentNode);
    complete.innerHTML += `<li><Image src="remove.png" width="30px" height="30px"  class="rem"></image><input type="checkbox" class="myCheck2"  ></input><p>${text.value}</p></li>`;

    localStorage.setItem("add2", complete.innerHTML);
    localStorage.setItem("add", todo.innerHTML);
  }
});
complete.addEventListener("click", (event) => {
  if (event.target.className == "rem") {
    complete.removeChild(event.target.parentNode);
    localStorage.setItem("add2", complete.innerHTML);
  } else if ((event.target.className = "myCheck2")) {
    todo.innerHTML += `<li><Image src="remove.png" width="30px" height="30px"  class="rem"></image><input type="checkbox" class="myCheck"  ></input><p>${text.value}</p></li>`;
    complete.removeChild(event.target.parentNode);
    localStorage.setItem("add", todo.innerHTML);
    localStorage.setItem("add2", complete.innerHTML);
  }
});
