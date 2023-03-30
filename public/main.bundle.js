/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const log = console.log.bind(console);
const $el = document.getElementById.bind(document);

$el("newItem").addEventListener("click", () => {
  let listID = Date.now();
  let div = document.createElement("div");
  div.className = "toDoContainer";
  div.id = listID;
  div.innerHTML = `<div contenteditable="true" class="toDoItem">Tap to Edit</div><input type="checkbox" class="checkbox" data-listid=${listID}>`;
  div.classList.add("slideInLeft");

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

// document.querySelectorAll("");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUlBQXVJLE9BQU87QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcclxuY29uc3QgJGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQuYmluZChkb2N1bWVudCk7XHJcblxyXG4kZWwoXCJuZXdJdGVtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbGV0IGxpc3RJRCA9IERhdGUubm93KCk7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmNsYXNzTmFtZSA9IFwidG9Eb0NvbnRhaW5lclwiO1xyXG4gIGRpdi5pZCA9IGxpc3RJRDtcclxuICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIGNsYXNzPVwidG9Eb0l0ZW1cIj5UYXAgdG8gRWRpdDwvZGl2PjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgZGF0YS1saXN0aWQ9JHtsaXN0SUR9PmA7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzbGlkZUluTGVmdFwiKTtcclxuXHJcbiAgJGVsKFwibGlzdFVuRG9uZVwiKS5hcHBlbmQoZGl2KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBjbG9uZSA9ICRlbChlLnRhcmdldC5kYXRhc2V0Lmxpc3RpZCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVPdXRSaWdodFwiKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xvbmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU91dFJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgICAgICRlbChcImxpc3REb25lXCIpLmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVPdXRSaWdodFwiKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xvbmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU91dFJpZ2h0XCIpO1xyXG5cclxuICAgICAgICAgICAgJGVsKFwibGlzdFVuRG9uZVwiKS5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9Eb0l0ZW1cIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChlbC5pbm5lckhUTUwgPT0gXCJUYXAgdG8gRWRpdFwiKSB7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChlbC5pbm5lckhUTUwgPT0gXCJcIikge1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiVGFwIHRvIEVkaXRcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJGVsKFwidGFza3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgJGVsKFwibGlzdFRpdGxlXCIpLmlubmVySFRNTCA9PVxyXG4gICAgYENvbXBsZXRlZCBMaXN0XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJkZWxldGVMaXN0SXRlbXNcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cclxuICAgICAgICAgIGRlbGV0ZV9zd2VlcFxyXG4gICAgICAgIDwvc3Bhbj5gXHJcbiAgKSB7XHJcbiAgICAkZWwoXCJsaXN0VGl0bGVcIikuaW5uZXJIVE1MID0gYFVuLUNvbXBsZXRlZCBMaXN0XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJkZWxldGVMaXN0SXRlbXNcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cclxuICAgICAgICAgIGRlbGV0ZV9zd2VlcFxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkZWwoXCJsaXN0VGl0bGVcIikuaW5uZXJIVE1MID0gYENvbXBsZXRlZCBMaXN0XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJkZWxldGVMaXN0SXRlbXNcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cclxuICAgICAgICAgIGRlbGV0ZV9zd2VlcFxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG4gIH1cclxuXHJcbiAgJGVsKFwiZGVsZXRlTGlzdEl0ZW1zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IHVzZXJDb25zZW50ID0gY29uZmlybShcIkRlbGV0ZSBhbGwgY29tcGxldGVkIHRhc2tzP1wiKTtcclxuICAgIGlmICh1c2VyQ29uc2VudCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94OmNoZWNrZWRcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAkZWwoZWwuZGF0YXNldC5saXN0aWQpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImZpbmlzaGVkVGFza3NcIik7XHJcbiAgJGVsKFwibGlzdFVuRG9uZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICRlbChcImxpc3REb25lXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuJGVsKFwiZGVsZXRlTGlzdEl0ZW1zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3g6Y2hlY2tlZFwiKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgJGVsKGVsLmRhdGFzZXQubGlzdGlkKS5yZW1vdmUoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=