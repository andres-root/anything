(function() {
  var self = this;
  self.anythingTests = [];
  self.testRunner = function(e) {
      for(var i in self.anythingTests)
          self.anythingTests[i].apply(null, self);
      console.log("Tested!");
  };

  window.anythingRunTests = function() {
      window.onload = self.testRunner;
      console.log("Test runner initialized");
  };
  window.anythingAddTest = function(test) {
      console.log("Added test");
      self.anythingTests.push(test);
  };
  self.assertTrue = function(actual, message) {
      console.log("Running test");
      message = message != ""
          ? ": " + message
          : "";
      console.log(actual ? "Success" : "Failure" + message);
  };
})();

anythingAddTest(function() {
    assertTrue(window.onload == testRunner, "tests should run when page ready");
});
