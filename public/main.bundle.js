(()=>{console.log.bind(console);const e=document.getElementById.bind(document);e("newItem").addEventListener("click",(()=>{e("listUnDone").classList.contains("hidden")&&(e("listUnDone").classList.toggle("hidden"),e("listDone").classList.toggle("hidden"),e("tasks").innerHTML="format_list_bulleted_add");let t=Date.now(),a=document.createElement("div");var s;a.className="toDoContainer",a.id=t,a.innerHTML=`<div class="material-symbols-outlined">drag_indicator</div>\n                    <textarea type="text" class="toDoItem" placeholder="Edit"></textarea>\n                    <input type="checkbox" class="checkbox" data-listid=${t}>`,e("listUnDone").append(a),(s=e(t)).setAttribute("draggable",!0),s.addEventListener("dragover",(e=>{e.preventDefault(),1==e.target.draggable?e.target.classList.add("dropZone"):e.target.parentElement.classList.add("dropZone"),e.dataTransfer.dropEffect="move"})),s.addEventListener("dragstart",(e=>{e.dataTransfer.dropEffect="move",e.target.classList.add("dragTarget"),e.dataTransfer.setData("text/plain",e.target.id)})),s.addEventListener("dragleave",(e=>{s.classList.remove("dragTarget"),e.target.classList.remove("dropZone")})),s.addEventListener("drop",(t=>{t.preventDefault();let a=s.parentNode;!function(e,t,a,s){let n,d,l;[...document.querySelectorAll(".toDoContainer")].map(((e,t)=>{e==a&&(n=t)})),[...document.querySelectorAll(".toDoContainer")].map(((e,a)=>{e==t&&(d=a)})),l=n>d,l?s.insertBefore(a,t):s.insertBefore(a,s.children.item(d+1))}(0,s,e(t.dataTransfer.getData("text/plain")),a),s.classList.remove("dropZone"),t.target.classList.remove("dropZone")})),document.querySelectorAll(".checkbox").forEach((t=>{t.addEventListener("click",(t=>{let a=e(t.target.dataset.listid);t.target.checked?setTimeout((()=>{a.remove(),e("listDone").append(a)}),250):setTimeout((()=>{a.remove(),e("listUnDone").append(a)}),250)}))}))})),e("tasks").addEventListener("click",(t=>{'Completed List\n        <span id="deleteListItems" class="material-symbols-outlined">\n          delete_sweep\n        </span>'==e("listTitle").innerHTML?e("listTitle").innerHTML='Un-Completed List\n        <span id="deleteListItems" class="material-symbols-outlined">\n          delete_sweep\n        </span>':e("listTitle").innerHTML='Completed List\n        <span id="deleteListItems" class="material-symbols-outlined">\n          delete_sweep\n        </span>',e("deleteListItems").addEventListener("click",(t=>{confirm("Delete all completed tasks?")&&document.querySelectorAll(".checkbox:checked").forEach((t=>{e(t.dataset.listid).remove()}))})),"data_check"==t.target.innerHTML?t.target.innerHTML="format_list_bulleted_add":t.target.innerHTML="data_check",e("listUnDone").classList.toggle("hidden"),e("listDone").classList.toggle("hidden")})),e("deleteListItems").addEventListener("click",(t=>{document.querySelectorAll(".checkbox:checked").forEach((t=>{e(t.dataset.listid).remove()}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ik1BQVlBLFFBQVFDLElBQUlDLEtBQUtGLFNBQTdCLE1BQ01HLEVBQU1DLFNBQVNDLGVBQWVILEtBQUtFLFVBRXpDRCxFQUFJLFdBQVdHLGlCQUFpQixTQUFTLEtBQ25DSCxFQUFJLGNBQWNJLFVBQVVDLFNBQVMsWUFDdkNMLEVBQUksY0FBY0ksVUFBVUUsT0FBTyxVQUNuQ04sRUFBSSxZQUFZSSxVQUFVRSxPQUFPLFVBQ2pDTixFQUFJLFNBQVNPLFVBQVksNEJBRzNCLElBQUlDLEVBQVNDLEtBQUtDLE1BQ2RDLEVBQU1WLFNBQVNXLGNBQWMsT0F1RW5DLElBQXNCQyxFQXRFcEJGLEVBQUlHLFVBQVksZ0JBQ2hCSCxFQUFJSSxHQUFLUCxFQUNURyxFQUFJSixVQUFZLG1PQUV3REMsS0FDeEVSLEVBQUksY0FBY2dCLE9BQU9MLElBaUVMRSxFQS9EUGIsRUFBSVEsSUFnRWRTLGFBQWEsYUFBYSxHQUU3QkosRUFBR1YsaUJBQWlCLFlBQWFlLElBQy9CQSxFQUFFQyxpQkFDd0IsR0FBdEJELEVBQUVFLE9BQU9DLFVBQ1hILEVBQUVFLE9BQU9oQixVQUFVa0IsSUFBSSxZQUV2QkosRUFBRUUsT0FBT0csY0FBY25CLFVBQVVrQixJQUFJLFlBRXZDSixFQUFFTSxhQUFhQyxXQUFhLE1BQU0sSUFFcENaLEVBQUdWLGlCQUFpQixhQUFjZSxJQUNoQ0EsRUFBRU0sYUFBYUMsV0FBYSxPQUM1QlAsRUFBRUUsT0FBT2hCLFVBQVVrQixJQUFJLGNBQ3ZCSixFQUFFTSxhQUFhRSxRQUFRLGFBQWNSLEVBQUVFLE9BQU9MLEdBQUcsSUFFbkRGLEVBQUdWLGlCQUFpQixhQUFjZSxJQUNoQ0wsRUFBR1QsVUFBVXVCLE9BQU8sY0FDcEJULEVBQUVFLE9BQU9oQixVQUFVdUIsT0FBTyxXQUFXLElBRXZDZCxFQUFHVixpQkFBaUIsUUFBU2UsSUFDM0JBLEVBQUVDLGlCQUVGLElBQUlTLEVBQWVmLEVBQUdnQixZQVcxQixTQUFvQlgsRUFBR1ksRUFBWUMsRUFBWUgsR0FDN0MsSUFBSUksRUFDQUMsRUFDQUMsRUFFSixJQUFJakMsU0FBU2tDLGlCQUFpQixtQkFBbUJDLEtBQUksQ0FBQ3ZCLEVBQUl3QixLQUNwRHhCLEdBQU1rQixJQUNSQyxFQUFrQkssRUFDcEIsSUFHRixJQUFJcEMsU0FBU2tDLGlCQUFpQixtQkFBbUJDLEtBQUksQ0FBQ3ZCLEVBQUl3QixLQUNwRHhCLEdBQU1pQixJQUNSRyxFQUFrQkksRUFDcEIsSUFHRkgsRUFBWUYsRUFBa0JDLEVBRTFCQyxFQUNGTixFQUFhVSxhQUFhUCxFQUFZRCxHQUV0Q0YsRUFBYVUsYUFDWFAsRUFDQUgsRUFBYVcsU0FBU0MsS0FBS1AsRUFBa0IsR0FHbkQsQ0FsQ0lRLENBQVd2QixFQUhNTCxFQUNBYixFQUFJa0IsRUFBRU0sYUFBYWtCLFFBQVEsZUFFTmQsR0FFdENmLEVBQUdULFVBQVV1QixPQUFPLFlBQ3BCVCxFQUFFRSxPQUFPaEIsVUFBVXVCLE9BQU8sV0FBVyxJQTVGdkMxQixTQUFTa0MsaUJBQWlCLGFBQWFRLFNBQVM5QixJQUM5Q0EsRUFBR1YsaUJBQWlCLFNBQVVlLElBQzVCLElBQUlzQixFQUFPeEMsRUFBSWtCLEVBQUVFLE9BQU93QixRQUFRQyxRQUM1QjNCLEVBQUVFLE9BQU8wQixRQUNYQyxZQUFXLEtBQ1RQLEVBQUtiLFNBQ0wzQixFQUFJLFlBQVlnQixPQUFPd0IsRUFBSyxHQUMzQixLQUVITyxZQUFXLEtBQ1RQLEVBQUtiLFNBQ0wzQixFQUFJLGNBQWNnQixPQUFPd0IsRUFBSyxHQUM3QixJQUNMLEdBQ0EsR0FDRixJQUdKeEMsRUFBSSxTQUFTRyxpQkFBaUIsU0FBVWUsSUFHcEMsa0lBREFsQixFQUFJLGFBQWFPLFVBTWpCUCxFQUFJLGFBQWFPLFVBQVksb0lBSzdCUCxFQUFJLGFBQWFPLFVBQVksaUlBTS9CUCxFQUFJLG1CQUFtQkcsaUJBQWlCLFNBQVVlLElBQzlCOEIsUUFBUSxnQ0FFeEIvQyxTQUFTa0MsaUJBQWlCLHFCQUFxQlEsU0FBUzlCLElBQ3REYixFQUFJYSxFQUFHK0IsUUFBUUMsUUFBUWxCLFFBQVEsR0FFbkMsSUFHd0IsY0FBdEJULEVBQUVFLE9BQU9iLFVBQ1hXLEVBQUVFLE9BQU9iLFVBQVksMkJBRXJCVyxFQUFFRSxPQUFPYixVQUFZLGFBRXZCUCxFQUFJLGNBQWNJLFVBQVVFLE9BQU8sVUFDbkNOLEVBQUksWUFBWUksVUFBVUUsT0FBTyxTQUFTLElBRzVDTixFQUFJLG1CQUFtQkcsaUJBQWlCLFNBQVVlLElBQ2hEakIsU0FBU2tDLGlCQUFpQixxQkFBcUJRLFNBQVM5QixJQUN0RGIsRUFBSWEsRUFBRytCLFFBQVFDLFFBQVFsQixRQUFRLEdBQy9CLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcclxuY29uc3QgJGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQuYmluZChkb2N1bWVudCk7XHJcblxyXG4kZWwoXCJuZXdJdGVtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKCRlbChcImxpc3RVbkRvbmVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XHJcbiAgICAkZWwoXCJsaXN0VW5Eb25lXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAkZWwoXCJsaXN0RG9uZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgJGVsKFwidGFza3NcIikuaW5uZXJIVE1MID0gXCJmb3JtYXRfbGlzdF9idWxsZXRlZF9hZGRcIjtcclxuICB9XHJcblxyXG4gIGxldCBsaXN0SUQgPSBEYXRlLm5vdygpO1xyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc05hbWUgPSBcInRvRG9Db250YWluZXJcIjtcclxuICBkaXYuaWQgPSBsaXN0SUQ7XHJcbiAgZGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRyYWdfaW5kaWNhdG9yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0b0RvSXRlbVwiIHBsYWNlaG9sZGVyPVwiRWRpdFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhLWxpc3RpZD0ke2xpc3RJRH0+YDtcclxuICAkZWwoXCJsaXN0VW5Eb25lXCIpLmFwcGVuZChkaXYpO1xyXG5cclxuICBhZGRMaXN0ZW5lcnMoJGVsKGxpc3RJRCkpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgbGV0IGl0ZW0gPSAkZWwoZS50YXJnZXQuZGF0YXNldC5saXN0aWQpO1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICRlbChcImxpc3REb25lXCIpLmFwcGVuZChpdGVtKTtcclxuICAgICAgICB9LCAyNTApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICRlbChcImxpc3RVbkRvbmVcIikuYXBwZW5kKGl0ZW0pO1xyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiRlbChcInRhc2tzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICRlbChcImxpc3RUaXRsZVwiKS5pbm5lckhUTUwgPT1cclxuICAgIGBDb21wbGV0ZWQgTGlzdFxyXG4gICAgICAgIDxzcGFuIGlkPVwiZGVsZXRlTGlzdEl0ZW1zXCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XHJcbiAgICAgICAgICBkZWxldGVfc3dlZXBcclxuICAgICAgICA8L3NwYW4+YFxyXG4gICkge1xyXG4gICAgJGVsKFwibGlzdFRpdGxlXCIpLmlubmVySFRNTCA9IGBVbi1Db21wbGV0ZWQgTGlzdFxyXG4gICAgICAgIDxzcGFuIGlkPVwiZGVsZXRlTGlzdEl0ZW1zXCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XHJcbiAgICAgICAgICBkZWxldGVfc3dlZXBcclxuICAgICAgICA8L3NwYW4+YDtcclxuICB9IGVsc2Uge1xyXG4gICAgJGVsKFwibGlzdFRpdGxlXCIpLmlubmVySFRNTCA9IGBDb21wbGV0ZWQgTGlzdFxyXG4gICAgICAgIDxzcGFuIGlkPVwiZGVsZXRlTGlzdEl0ZW1zXCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XHJcbiAgICAgICAgICBkZWxldGVfc3dlZXBcclxuICAgICAgICA8L3NwYW4+YDtcclxuICB9XHJcblxyXG4gICRlbChcImRlbGV0ZUxpc3RJdGVtc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCB1c2VyQ29uc2VudCA9IGNvbmZpcm0oXCJEZWxldGUgYWxsIGNvbXBsZXRlZCB0YXNrcz9cIik7XHJcbiAgICBpZiAodXNlckNvbnNlbnQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveDpjaGVja2VkXCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgJGVsKGVsLmRhdGFzZXQubGlzdGlkKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT0gXCJkYXRhX2NoZWNrXCIpIHtcclxuICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiZm9ybWF0X2xpc3RfYnVsbGV0ZWRfYWRkXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiZGF0YV9jaGVja1wiO1xyXG4gIH1cclxuICAkZWwoXCJsaXN0VW5Eb25lXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgJGVsKFwibGlzdERvbmVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxufSk7XHJcblxyXG4kZWwoXCJkZWxldGVMaXN0SXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveDpjaGVja2VkXCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAkZWwoZWwuZGF0YXNldC5saXN0aWQpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhlbCkge1xyXG4gIGVsLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcclxuXHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQuZHJhZ2dhYmxlID09IHRydWUpIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyb3Bab25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcFpvbmVcIik7XHJcbiAgICB9XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7IC8vICAgbW92ZSBoYXMgbm8gaWNvbj8gYWRkaW5nIGNvcHkgc2hvd3MgK1xyXG4gIH0pO1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnVGFyZ2V0XCIpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xyXG4gIH0pO1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnVGFyZ2V0XCIpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bab25lXCIpO1xyXG4gIH0pO1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHBhcmVudFRhcmdldCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgZHJvcFRhcmdldCA9IGVsO1xyXG4gICAgbGV0IGRyYWdUYXJnZXQgPSAkZWwoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpO1xyXG5cclxuICAgIGhhbmRsZURyb3AoZSwgZHJvcFRhcmdldCwgZHJhZ1RhcmdldCwgcGFyZW50VGFyZ2V0KTtcclxuXHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcFpvbmVcIik7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcFpvbmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSwgZHJvcFRhcmdldCwgZHJhZ1RhcmdldCwgcGFyZW50VGFyZ2V0KSB7XHJcbiAgbGV0IGRyYWdUYXJnZXRJbmRleDtcclxuICBsZXQgZHJvcFRhcmdldEluZGV4O1xyXG4gIGxldCBkcmFnRGlyVXA7XHJcblxyXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvRG9Db250YWluZXJcIildLm1hcCgoZWwsIGkpID0+IHtcclxuICAgIGlmIChlbCA9PSBkcmFnVGFyZ2V0KSB7XHJcbiAgICAgIGRyYWdUYXJnZXRJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvRG9Db250YWluZXJcIildLm1hcCgoZWwsIGkpID0+IHtcclxuICAgIGlmIChlbCA9PSBkcm9wVGFyZ2V0KSB7XHJcbiAgICAgIGRyb3BUYXJnZXRJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRyYWdEaXJVcCA9IGRyYWdUYXJnZXRJbmRleCA+IGRyb3BUYXJnZXRJbmRleDtcclxuXHJcbiAgaWYgKGRyYWdEaXJVcCkge1xyXG4gICAgcGFyZW50VGFyZ2V0Lmluc2VydEJlZm9yZShkcmFnVGFyZ2V0LCBkcm9wVGFyZ2V0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFyZW50VGFyZ2V0Lmluc2VydEJlZm9yZShcclxuICAgICAgZHJhZ1RhcmdldCxcclxuICAgICAgcGFyZW50VGFyZ2V0LmNoaWxkcmVuLml0ZW0oZHJvcFRhcmdldEluZGV4ICsgMSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYmluZCIsIiRlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJpbm5lckhUTUwiLCJsaXN0SUQiLCJEYXRlIiwibm93IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImVsIiwiY2xhc3NOYW1lIiwiaWQiLCJhcHBlbmQiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkcmFnZ2FibGUiLCJhZGQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YVRyYW5zZmVyIiwiZHJvcEVmZmVjdCIsInNldERhdGEiLCJyZW1vdmUiLCJwYXJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwiZHJvcFRhcmdldCIsImRyYWdUYXJnZXQiLCJkcmFnVGFyZ2V0SW5kZXgiLCJkcm9wVGFyZ2V0SW5kZXgiLCJkcmFnRGlyVXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiaSIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwiaXRlbSIsImhhbmRsZURyb3AiLCJnZXREYXRhIiwiZm9yRWFjaCIsImRhdGFzZXQiLCJsaXN0aWQiLCJjaGVja2VkIiwic2V0VGltZW91dCIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9