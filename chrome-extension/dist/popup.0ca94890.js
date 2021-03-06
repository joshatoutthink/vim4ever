const code = ` (function addScript() {
  const pageVarEl = document.body.appendChild(document.createElement("script"))
  pageVarEl.innerHTML = ' window.vimReplaceSelector = "SELECTOR"'
  const script = document.createElement("script");
  script.src = "${chrome.extension.getURL("inject.js")}";
  document.body.appendChild(script);
})()
`;
window.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        const input = document.querySelector("#selector").value;
        chrome.tabs.executeScript({
            code: code.replaceAll("SELECTOR", input)
        });
    });
}); // function initServer(selector) {
 // const action = (data) => {};
 // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
 // const tab = tabs[0];
 // tabId = tab.id;
 // });
 // }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6IkFBQUEsS0FBSyxDQUFDLElBQUksSUFBSSw4T0FJRSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQVcsWUFBRSw2Q0FHdkQ7QUFFQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBa0IsbUJBQUUsUUFBUSxHQUFJLENBQUM7SUFDdkQsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQVE7SUFDOUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQU8sUUFBRSxRQUFRLEdBQUksQ0FBQztRQUM1QyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBVyxZQUFFLEtBQUs7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFVLFdBQUUsS0FBSztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsRUFFRCxDQUFrQyxBQUFsQyxFQUFrQyxBQUFsQyxnQ0FBa0M7QUFDbEMsQ0FBK0IsQUFBL0IsRUFBK0IsQUFBL0IsNkJBQStCO0FBQy9CLENBQTZFLEFBQTdFLEVBQTZFLEFBQTdFLDJFQUE2RTtBQUM3RSxDQUF1QixBQUF2QixFQUF1QixBQUF2QixxQkFBdUI7QUFDdkIsQ0FBa0IsQUFBbEIsRUFBa0IsQUFBbEIsZ0JBQWtCO0FBQ2xCLENBQU0sQUFBTixFQUFNLEFBQU4sSUFBTTtBQUNOLENBQUksQUFBSixFQUFJLEFBQUosRUFBSSIsInNvdXJjZXMiOlsic3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvZGUgPSBgIChmdW5jdGlvbiBhZGRTY3JpcHQoKSB7XG4gIGNvbnN0IHBhZ2VWYXJFbCA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSlcbiAgcGFnZVZhckVsLmlubmVySFRNTCA9ICcgd2luZG93LnZpbVJlcGxhY2VTZWxlY3RvciA9IFwiU0VMRUNUT1JcIidcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LnNyYyA9IFwiJHtjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImluamVjdC5qc1wiKX1cIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufSkoKVxuYDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpLnZhbHVlO1xuICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgY29kZTogY29kZS5yZXBsYWNlQWxsKFwiU0VMRUNUT1JcIiwgaW5wdXQpLFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBpbml0U2VydmVyKHNlbGVjdG9yKSB7XG4vLyBjb25zdCBhY3Rpb24gPSAoZGF0YSkgPT4ge307XG4vLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xuLy8gY29uc3QgdGFiID0gdGFic1swXTtcbi8vIHRhYklkID0gdGFiLmlkO1xuLy8gfSk7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuMGNhOTQ4OTAuanMubWFwIn0=
