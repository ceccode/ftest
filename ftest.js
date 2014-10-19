(function(){
  var queue = [], paused = false, results;
  this.test = function test (name, fn) {
    queue.push(function () {
      console.log('%c'+name, 'background:#eee;color:#666');
      fn();
    });
    runTest();
  };

  this.pause = function() {
    paused = true;
  };
  this.resume = function () {
    paused = false;
    setTimeout(runTest(), 1);
  };

  function runTest() {
    if (!paused && queue.length) {
      queue.shift()();
      if (!paused) {
        resume();
      }
    }
  }

  this.assert = function assert (value, desc) {
    logStyle = value ? "background: green;color:#fff" : "background: red;color:#fff";
    log('%c'+desc, logStyle);
  };

})();

function log() {
  try {
    console.log.apply(console, arguments);
  } catch(e) {
      //old opera way
      opera.postError.apply(opera, arguments);
  }
}
