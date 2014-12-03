anythingAddTest(function() {
    assertTrue(document.body.appendChild instanceof Function,
        "appending elements should be supported by browser");
});