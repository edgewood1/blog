- for desktop, the body tag extends the width of viewport, but the html does not. 

Html: document itself (root)
Body: document contents

viewport - user's visible area of web page set in the meta tag
screensize - physical size of screensize

viewport = device screen
window - browser window <=viewport
document - webpage

Element.clientWidth > viewport width = doc + padding, but not borders, margins, verticle scrollbars

Window.innerWidth - browser viewport including v scrollbars
Window.outerWidth - width of outside of browser window .

https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts

