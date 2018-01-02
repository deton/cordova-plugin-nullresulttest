var exec = require('cordova/exec');

function nothread(successCb, failureCb) {
    exec(successCb, failureCb, "nullresulttest", "nothread", []);
}

function thread(successCb, failureCb) {
    exec(successCb, failureCb, "nullresulttest", "thread", []);
}

function forcethreadresult(successCb, failureCb) {
    exec(successCb, failureCb, "nullresulttest", "forcethreadresult", []);
}

module.exports = {
    nothread: nothread,
    thread: thread,
    forcethreadresult: forcethreadresult
};
