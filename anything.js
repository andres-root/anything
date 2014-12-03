window.onload = function() {
    if (document !== undefined && document.body instanceof Element) {
        var div = document.createElement('div');
        div.innerHTML = 'Hello, world!';
        document.body.appendChild(div);
    }
};

anythingAddTest(function() {
    assertTrue(document.body.appendChild instanceof Function, "appending elements should be supported by browser");
});