const log = console.log.bind(console);
const $el = document.getElementById.bind(document);

$el("newItem").addEventListener("click", () => {
  let listID = Date.now();
  let div = document.createElement("div");
  div.className = "toDoContainer";
  div.id = listID;
  //div.innerHTML = `<div contenteditable="true" class="toDoItem">Tap to Edit</div><input type="checkbox" class="checkbox" data-listid=${listID}>`;
  div.innerHTML = `<div class="toDoItem">Tap to Edit</div><input type="checkbox" class="checkbox" data-listid=${listID}>`;
  div.classList.add("slideInLeft");

  $el("listUnDone").append(div);

  setTimeout(() => {
    div.classList.remove("slideInLeft");
  }, 500);

  enableDragSort(document.querySelectorAll(".listPanel > div"));

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
            clone.classList.add("slideInLeft");
            $el("listDone").append(clone);
          }, 100);
        } else {
          clone.classList.remove("slideInLeft");
          clone.classList.add("slideOutRight");

          setTimeout(function () {
            clone.remove();
            clone.classList.remove("slideOutRight");

            $el("listUnDone").append(clone);
          }, 200);
        }
      }, 1000);
    });
  });

  document.querySelectorAll(".toDoItem").forEach((el) => {
    el.addEventListener("click", () => {
      el.setAttribute("contenteditable", true);
    });
    el.addEventListener("focus", () => {
      if (el.innerHTML == "Tap to Edit") {
        el.innerHTML = "";
      }
    });
    el.addEventListener("blur", () => {
      el.setAttribute("contenteditable", false);
      if (el.innerHTML == "") {
        el.innerHTML = "Tap to Edit";
      }
    });
  });
});

$el("tasks").addEventListener("click", (e) => {
  if (
    $el("listTitle").innerHTML ==
    `Completed List
        <span id="deleteListItems" class="material-symbols-outlined">
          delete_sweep
        </span>`
  ) {
    $el("listTitle").innerHTML = `Un-Completed List
        <span id="deleteListItems" class="material-symbols-outlined">
          delete_sweep
        </span>`;
  } else {
    $el("listTitle").innerHTML = `Completed List
        <span id="deleteListItems" class="material-symbols-outlined">
          delete_sweep
        </span>`;
  }

  $el("deleteListItems").addEventListener("click", (e) => {
    let userConsent = confirm("Delete all completed tasks?");
    if (userConsent) {
      document.querySelectorAll(".checkbox:checked").forEach((el) => {
        $el(el.dataset.listid).remove();
      });
    }
  });

  e.target.classList.toggle("finishedTasks");
  $el("listUnDone").classList.toggle("hidden");
  $el("listDone").classList.toggle("hidden");
});

$el("deleteListItems").addEventListener("click", (e) => {
  document.querySelectorAll(".checkbox:checked").forEach((el) => {
    $el(el.dataset.listid).remove();
  });
});

/*-----------------------------------*/

function enableDragSort(list) {
  // document.querySelectorAll(".listPanel").forEach((el) => {
  //   el.addEventListener("contextMenu", (e) => {
  //     e.preventDefault();
  //   });
  // });

  if (list.length > 0) {
    [...list].map((el) => {
      addListeners(el);
    });
  }
}

function addListeners(el) {
  el.setAttribute("draggable", true);
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (e.target.draggable == true) {
      e.target.classList.add("drag-sort-active");
    }
  });
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
  });
  el.addEventListener("dragleave", (e) => {
    e.target.classList.remove("drag-sort-active");
  });
  el.addEventListener("dragend", (e) => {
    e.target.classList.remove("drag-sort-active");
  });
  el.addEventListener("drop", (e) => {
    e.target.classList.remove("drag-sort-active");
    handleDrop(e);
  });
}

function enableDragItem(item) {
  item.setAttribute("draggable", true);
  item.addEventListener("drag", (e) => {
    handleDrag(e);
  });
  item.addEventListener("dragend", (e) => {
    handleDrop(e);
  });
}

function handleDrag(e) {
  const selectedItem = e.target,
    list = selectedItem.parentNode,
    x = e.clientX,
    y = e.clientY;

  selectedItem.classList.add("drag-sort-active");
  let swapItem =
    document.elementFromPoint(x, y) === null
      ? selectedItem
      : document.elementFromPoint(x, y);

  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(e) {
  e.target.classList.remove("drag-sort-active");
}

enableDragSort(document.querySelectorAll(".listPanel > div"));
