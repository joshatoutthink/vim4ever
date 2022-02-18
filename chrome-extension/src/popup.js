const code = ` (function addScript() {
  const pageVarEl = document.body.appendChild(document.createElement("script"))
  pageVarEl.innerHTML = ' window.vimReplaceSelector = "SELECTOR"'
  const script = document.createElement("script");
  script.src = "${chrome.extension.getURL("inject.js")}";
  document.body.appendChild(script);
})()
`;

window.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    const input = document.querySelector("#selector").value;
    chrome.tabs.executeScript({
      code: code.replaceAll("SELECTOR", input),
    });
  });
});

// function initServer(selector) {
// const action = (data) => {};
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// const tab = tabs[0];
// tabId = tab.id;
// });
// }
