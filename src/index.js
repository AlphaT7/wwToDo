const log = console.log.bind(console);
const $el = document.getElementById.bind(document);

$el("newItem").addEventListener("click", () => {
  if ($el("listUnDone").classList.contains("hidden")) {
    $el("listUnDone").classList.toggle("hidden");
    $el("listDone").classList.toggle("hidden");
    $el("tasks").innerHTML = "format_list_bulleted_add";
  }

  let listID = Date.now();
  let div = document.createElement("div");
  div.className = "toDoContainer";
  div.id = listID;
  div.innerHTML = `<div class="material-symbols-outlined">drag_indicator</div>
                    <textarea type="text" class="toDoItem" placeholder="Edit"></textarea>
                    <input type="checkbox" class="checkbox" data-listid=${listID}>`;
  $el("listUnDone").append(div);

  addListeners($el(listID));

  document.querySelectorAll(".checkbox").forEach((el) => {
    el.addEventListener("click", (e) => {
      let item = $el(e.target.dataset.listid);
      if (e.target.checked) {
        setTimeout(() => {
          item.remove();
          $el("listDone").append(item);
        }, 250);
      } else {
        setTimeout(() => {
          item.remove();
          $el("listUnDone").append(item);
        }, 250);
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

  if (e.target.innerHTML == "data_check") {
    e.target.innerHTML = "format_list_bulleted_add";
  } else {
    e.target.innerHTML = "data_check";
  }
  $el("listUnDone").classList.toggle("hidden");
  $el("listDone").classList.toggle("hidden");
});

$el("deleteListItems").addEventListener("click", (e) => {
  document.querySelectorAll(".checkbox:checked").forEach((el) => {
    $el(el.dataset.listid).remove();
  });
});

function addListeners(el) {
  el.setAttribute("draggable", true);

  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (e.target.draggable == true) {
      e.target.classList.add("dropZone");
    } else {
      e.target.parentElement.classList.add("dropZone");
    }
    e.dataTransfer.dropEffect = "move"; //   move has no icon? adding copy shows +
  });
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.dropEffect = "move";
    e.target.classList.add("dragTarget");
    e.dataTransfer.setData("text/plain", e.target.id);
  });
  el.addEventListener("dragleave", (e) => {
    el.classList.remove("dragTarget");
    e.target.classList.remove("dropZone");
  });
  el.addEventListener("drop", (e) => {
    e.preventDefault();

    let parentTarget = el.parentNode;
    let dropTarget = el;
    let dragTarget = $el(e.dataTransfer.getData("text/plain"));

    handleDrop(e, dropTarget, dragTarget, parentTarget);

    el.classList.remove("dropZone");
    e.target.classList.remove("dropZone");
  });
}

function handleDrop(e, dropTarget, dragTarget, parentTarget) {
  let dragTargetIndex;
  let dropTargetIndex;
  let dragDirUp;

  [...document.querySelectorAll(".toDoContainer")].map((el, i) => {
    if (el == dragTarget) {
      dragTargetIndex = i;
    }
  });

  [...document.querySelectorAll(".toDoContainer")].map((el, i) => {
    if (el == dropTarget) {
      dropTargetIndex = i;
    }
  });

  dragDirUp = dragTargetIndex > dropTargetIndex;

  if (dragDirUp) {
    parentTarget.insertBefore(dragTarget, dropTarget);
  } else {
    parentTarget.insertBefore(
      dragTarget,
      parentTarget.children.item(dropTargetIndex + 1)
    );
  }
}
