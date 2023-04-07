
apppendChild vs. cloneNode  vs importNode

cloneNode - copies node from current document
importNode - clone node from another document (iframe, which has its own DOM
adoptNode - removes original element from parent DOM - not just copies

https://javascript.info/modifying-document#cloning-nodes-clonenode

always append dom element s with document gramgents

https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments

DF 2700 times faster than appending with innerHTML -keeping calcualtion paiting layout to a minium. 


google: 

reflow and adding csstext

https://medium.com/better-programming/web-performance-dom-reflow-76ac7c4d2d4f


what is a throttle js

https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf


debounce

https://davidwalsh.name/javascript-debounce-function


node-gyp

gyp: binding.gyp not found

https://stackoverflow.com/questions/42638918/cannot-npm-install-due-to-node-gyp-binding-gyp-not-found



request animation vs setinterval settimeout

https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout



dom - contains all elements

render tree - only contains elements you can see

layout - layout the render tree.  position and size.  they are placed somewhere in the context of a box - rectangle.  also styling on render tree.  handles x y dimesion.

painting - take all info and sends to core UI graphics libraries and uses draw functions to get things on a screen.  also handles z dimension (overlaps - what goes over vs what goes under.)




reflow - changes that affect the layout of a part of page: caused by adding / removing content, explicitly / implicityly changing width, height, font family, font size, etc.  computes teh layout of each visible element - position / size.  occurs when there is a change to DOM layout.  its expensive bc elements all must be calculated again Thne screen repainted.  looping .apendChild(newElemenet) 100 x  will cause 100 reflows.  one way to fix this is to add a createDomeumentFragment which contains 100items.  iterate 100 times onto the fragment, then tack the fragment onto dom.  this will create 1 reflow.  reflow requires a repaint. 

repaint - occurs if change is made: outline, visibility, background, or color.  repaint is expesive  b/c browser must verify the visiblity of all other nodes in DOM tree.  rendenders pixels to screen.  it only changes the pixels.  it doesn't require reflow.  

http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/

https://csstriggers.com/

google / yt: how frames work in a browser

https://www.youtube.com/watch?v=SmE4OwHztCc&t=3s

where's render coursae? 