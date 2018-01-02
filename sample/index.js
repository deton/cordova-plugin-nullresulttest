function nothread() {
  plugins.nullresulttest.nothread(onsuccess, onfail);
}

function thread() {
  plugins.nullresulttest.thread(onsuccess, onfail);
}

function forcethreadresult() {
  plugins.nullresulttest.forcethreadresult(onsuccess, onfail);
}

function onsuccess(result) {
  addMsg("null? " + (result === null) + " (" + result + ")");
}

function onfail(e) {
  addMsg("fail " + JSON.stringify(e));
}

function addMsg (msg) {
  document.getElementById('textarea').value += msg + '\n';
}
