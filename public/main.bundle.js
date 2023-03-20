/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
            log(clone);
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
      log(el.innerHTML);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsT0FBTztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NtdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2cgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xyXG5jb25zdCAkZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZC5iaW5kKGRvY3VtZW50KTtcclxuXHJcbmxldCBkb25lTGlzdCA9IFtdO1xyXG5sZXQgdG9Eb0xpc3QgPSBbXTtcclxubGV0IGRlbEl0ZW0gPSB7fTtcclxuXHJcbiRlbChcIm5ld0l0ZW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsZXQgbGlzdElEID0gRGF0ZS5ub3coKTtcclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXYuY2xhc3NOYW1lID0gXCJ0b0RvQ29udGFpbmVyXCI7XHJcbiAgZGl2LmlkID0gbGlzdElEO1xyXG4gIGRpdi5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhLWxpc3RpZD0ke2xpc3RJRH0+PGRpdiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgY2xhc3M9XCJ0b0RvSXRlbVwiPlRhcCB0byBFZGl0PC9kaXY+YDtcclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInNsaWRlSW5MZWZ0XCIpO1xyXG5cclxuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICBkZWxJdGVtW2xpc3RJRCArIFwiLW1cIl0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IGRlbCA9IGNvbmZpcm0oXCJEZWxldGUgdGhpcyB0YXNrP1wiKTtcclxuICAgICAgaWYgKGRlbCkge1xyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXQoZGVsSXRlbVtsaXN0SUQgKyBcIi1tXCJdKTtcclxuICB9KTtcclxuXHJcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuICAgIGRlbEl0ZW1bbGlzdElEICsgXCItdFwiXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgZGVsID0gY29uZmlybShcIkRlbGV0ZSB0aGlzIHRhc2s/XCIpO1xyXG4gICAgICBpZiAoZGVsKSB7XHJcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXQoZGVsSXRlbVtsaXN0SUQgKyBcIi10XCJdKTtcclxuICB9KTtcclxuXHJcbiAgJGVsKFwibGlzdFVuRG9uZVwiKS5hcHBlbmQoZGl2KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBjbG9uZSA9ICRlbChlLnRhcmdldC5kYXRhc2V0Lmxpc3RpZCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVPdXRSaWdodFwiKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xvbmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU91dFJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBkb25lTGlzdC5wdXNoKGNsb25lKTtcclxuICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZUluTGVmdFwiKTtcclxuICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZU91dFJpZ2h0XCIpO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbG9uZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlT3V0UmlnaHRcIik7XHJcbiAgICAgICAgICAgIGxvZyhjbG9uZSk7XHJcbiAgICAgICAgICAgIGRvbmVMaXN0LnNwbGljZShkb25lTGlzdC5pbmRleE9mKGNsb25lKSwgMSk7XHJcbiAgICAgICAgICAgIHRvRG9MaXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICAkZWwoXCJsaXN0VW5Eb25lXCIpLmFwcGVuZChjbG9uZSk7XHJcbiAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b0RvSXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgaWYgKGVsLmlubmVySFRNTCA9PSBcIlRhcCB0byBFZGl0XCIpIHtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcclxuICAgICAgbG9nKGVsLmlubmVySFRNTCk7XHJcbiAgICAgIGlmIChlbC5pbm5lckhUTUwgPT0gXCJcIikge1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiVGFwIHRvIEVkaXRcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJGVsKFwiZmluaXNoZWRUYXNrc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmICgkZWwoXCJsaXN0VW5Eb25lXCIpLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHJldHVybjtcclxuXHJcbiAgJGVsKFwibGlzdFVuRG9uZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmlkID0gXCJsaXN0RG9uZVwiO1xyXG4gIGRpdi5jbGFzc05hbWUgPSBcImxpc3RQYW5lbFwiO1xyXG5cclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRpdGxlLmlkID0gXCJjb21wbGV0ZWRUaXRsZVwiO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiQ29tcGxldGVkIFRhc2tzXCI7XHJcbiAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcblxyXG4gIGxldCBjbG9zZUNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2xvc2VDb21wbGV0ZWQuaWQgPSBcImNsb3NlQ29tcGxldGVkXCI7XHJcbiAgY2xvc2VDb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgY2xvc2VDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICRlbChcImxpc3REb25lXCIpLnJlbW92ZSgpO1xyXG4gICAgJGVsKFwibGlzdFVuRG9uZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH0pO1xyXG4gIHRpdGxlLmFwcGVuZChjbG9zZUNvbXBsZXRlZCk7XHJcblxyXG4gIGRvbmVMaXN0LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBkaXYuYXBwZW5kKGVsKTtcclxuICB9KTtcclxuICAkZWwoXCJyaWdodF9jb2xcIikuYXBwZW5kKGRpdik7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=