function ftests() {
  test("First group tests", function () {
    pause();
    setTimeout(function () {
      assert(true, "First assertion completed");
      resume();
    }, 1000);
    assert(true, "Second assertion completed");
    assert(true, "Third assertion completed");
  });
  test("Second group tests", function () {
    assert(true, "First assertion of second group completed");
    assert(false, "Second assertion of second group failed");
  });
  test("Third group tests", function () {
    assert(10, "5 value passed");
    assert(null, "null value failed");
  });
}
