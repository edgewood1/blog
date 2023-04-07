media queries


 `@media` condition  rule 

if (this condition is true) { apply these css rules}

Typical conditions might include the size of the browser window

ways of measuring browser windows: 

- Max-width
- min-width

Breakpoint - an impose size for browser window where new rules take over

Mobile first - design for modilbe thaen desktop; changing design when width gents larger than a size (not smaller than).  that is, use min-width not max-width

mobile phones is the default css

tablet media query > min-width: 600px

desktop min-width: 768px

Breakpoints

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
3. parents / family

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

orientation

@media only screen and (orientation: landscape) {
 body {
  background-color: lightblue;
 }
}

Otherwise

@media only screen and (max-width: 600px) {
 div.example {
  display: none;
 }
}

media queryies for devices

https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

Other



width x height

iphone
320-414 x 568-812

ipad range:
768-1024 x  834-1336

this keeps it from being a phone
(iphonex can be 812x375, putting it over the 767 min-width, but it can't do this and be over 767px) 

desktop range:
1280-2560 x 768-1800

this keeps it from being a tablet:
min-width: 1025 min-height:767

____

mobile: 

https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html

desktops: 

https://visual.ly/community/Infographics/technology/apple-devices-resolutions

rationale

tablet change

iphonex is 812x375 in landscape mode
812 falls between the 767-1024 width window defining a tablet
but if it falls between this width, its height would be less than 414

min-width: 750 - keeps it from being a phone

so max-width: 1024 (keeps it from desktop but not phone)



desktop: 

however, on a large desktop of 1440x768 
desktop and tabletMode would be true, but not if min-height raised 768
768 is the height of a Macbook Air 11.6 


Screen size  - the physical measurement of the screen in inches (5in screen size)
screen resolution - the number of pixels on screen.  resolution of 320 X 480 points.


width x height

https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html

 /* MAX WIDTH - GROUNDS THE LIMIT
/* @media screen and (max-width: 700px) {
    max-width nice because captures everything under this size, so this will capture: 
/* if less than 700 px, then RED
/* if at least 576 but less than 758, then RED */
/* MIN WIDTH - SKIES THE LIMIT
/* @media screen and (min-width: 576px) {  */
    @media screen and (max-width: 700px) {
        body {
            background-color: red;
        }
     }
    

     /* if at least 768 but less than 992, do this: */
    @media (min-width: 768px) { 
        body {
            background-color: orange
        }
    }

