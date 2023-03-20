const log = console.log.bind(console);
const $el = document.getElementById.bind(document);

let doneList = [];
let toDoList = [];
let delItem = {};

$el("newItem").addEventListener("click", () => {
  let listID = Date.now();
  let div = document.createElement("div");
  div.className = "toDoContainer";
  div.id = listID;
  div.innerHTML = `<input type="checkbox" class="checkbox" data-listid=${listID}><div contenteditable="true" class="toDoItem">Tap to Edit</div>`;
  div.classList.add("slideInLeft");

  div.addEventListener("mousedown", () => {
    delItem[listID + "-m"] = setTimeout(() => {
      let del = confirm("Delete this task?");
      if (del) {
        div.remove();
      }
    }, 1000);
  });

  div.addEventListener("mouseup", () => {
    clearTimeout(delItem[listID + "-m"]);
  });

  div.addEventListener("touchstart", () => {
    delItem[listID + "-t"] = setTimeout(() => {
      let del = confirm("Delete this task?");
      if (del) {
        div.remove();
      }
    }, 1000);
  });

  div.addEventListener("touchend", () => {
    clearTimeout(delItem[listID + "-t"]);
  });

  $el("listUnDone").append(div);

  document.querySelectorAll(".checkbox").forEach((el, i) => {
    el.addEventListener("click", (e) => {
      let clone = $el(e.target.dataset.listid);
      setTimeout(function () {
        if (e.target.checked) {
          clone.classList.remove("slideInLeft");
          clone.classList.add("slideOutRight");

          setTimeout(function () {
            clone.remove();
            clone.classList.remove("slideOutRight");
            doneList.push(clone);
          }, 200);
        } else {
          clone.classList.remove("slideInLeft");
          clone.classList.add("slideOutRight");

          setTimeout(function () {
            clone.remove();
            clone.classList.remove("slideOutRight");
            doneList.splice(doneList.indexOf(clone), 1);
            toDoList.push(clone);
            $el("listUnDone").append(clone);
          }, 200);
        }
      }, 1000);
    });
  });

  document.querySelectorAll(".toDoItem").forEach((el) => {
    el.addEventListener("focus", () => {
      if (el.innerHTML == "Tap to Edit") {
        el.innerHTML = "";
      }
    });
    el.addEventListener("blur", () => {
      if (el.innerHTML == "") {
        el.innerHTML = "Tap to Edit";
      }
    });
  });
});

$el("finishedTasks").addEventListener("click", () => {
  if ($el("listUnDone").style.display == "none") return;

  $el("listUnDone").style.display = "none";
  let div = document.createElement("div");
  div.id = "listDone";
  div.className = "listPanel";

  let title = document.createElement("div");
  title.id = "completedTitle";
  title.innerText = "Completed Tasks";
  div.append(title);

  let closeCompleted = document.createElement("div");
  closeCompleted.id = "closeCompleted";
  closeCompleted.innerText = "X";
  closeCompleted.addEventListener("click", () => {
    $el("listDone").remove();
    $el("listUnDone").style.display = "block";
  });
  title.append(closeCompleted);

  doneList.forEach((el) => {
    div.append(el);
  });
  $el("right_col").append(div);
});
