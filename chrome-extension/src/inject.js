function fn() {
  const ws = new WebSocket("ws://localhost:7878");

  ws.onclose = function () {
    console.log("close");
  };
  ws.onerror = function (e) {
    console.log("error", e);
  };

  const editor = document.querySelector(window.vimReplaceSelector);
  ws.onmessage = function (e) {
    console.log(e.data);
    const { code } = JSON.parse(e.data);
    eval("editor.CodeMirror.setValue(code);");
  };
}
fn();
