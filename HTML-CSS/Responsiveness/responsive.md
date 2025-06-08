Responsiveness - you need to make your websites responsive
responsive means your websites should work on each and every device irrespective of the screen size

there are multiple ways to do it - 
1. Have different CSS files targeted to different screen sizes (different rendering)
2. To have flexible layouts using flex/grid (not a full fledged way but a partial method)
3. To have relative units (not a full fledged way but a partial method)
4. Use media queries (full-fledged way) -- we'll be learning today

Viewport Meta Tag - a very importangt meta tag used to make your websites responsive
<meta name="viewport" content="width=device-width, initial-scale=1.0">
meta tags are kind of key-value pairs (added inside head)
meta tags are used for several purposes - 
1. adding meta information of your website(like adding copyright information info)
2. SEO(search engine optimization) purposes
3. for reponsiveness

View Port Metatag - 
this tag tells the browser how to control the page's dimension and scaling on different devices especially mobile.
width=device-width => sets the viewport width to be the same as the device's screen size. without this, the browser might default to a desktop-sized width like 980px.
initial-scale=1.0 => sets the initial zoom level to 1:1. so, no zoom is applied when the page loads.
Treat this as a good programming practice.

MEDIA QUERIES - 
@media (max-width: 800px) {
    p {
        color: red;
    }
}
@media (max-width: 600px) {
    p {
        color: red;
    }
}
it is just like if-else conditions. You say that if the width is smaller than 800px then the color will be red.
The above style means that the color will be blue when width is less than 600px. It will be red when the width is betweeb 600 and 800px and it will be green when it is greated than 800px.
VERY IMPORTANT CONCEPT - ORDER OF WRITING THE STYLES MATTER A LOT. THIS IS BECAUSE CSS GETS EXECUTED LINE BY LINE FROM TOP TO BOTTOM.

Basic general categories to apply media queries -> 
1. Below 600px
2. From 600px to 900px
3. From 900px to 1200px
4. From 1200px to 1500px
5. Greater than 1500px

1. Below 600px
2. From 600px to 800px
3. From 800px to 1000px
4. From 1000px to 1200px
5. From 1200px to 1400px
6. Greater than 1400px

@media (max-width: 800px) and (min-width: 600px) {
    p {
        color: red;
    }
}
This is how you can club multiple conditions together.

WHENEVER YOU ARE GIVING MEDIA QUERIES IN ONLY MAX-WIDTH, GIVE THEM IN DECREASING ORDER OF WIDTH. (DESKTOP-FIRST)
WHENEVER YOU ARE GIVING MEDIA QUERIES IN ONLY MIN-WIDTH, GIVE THEM IN INCREASING ORDER OF WIDTH. (MOBILE-FIRST)

YOU CAN FORM THE GENERAL 5 CATEGORIES IN GAPS OF 300PX USING ONLY MIN-WIDTH OR ONLY MAX-WIDTH OR BOTH MIN-WIDTH AND MAX-WIDTH.

There are 2 ways of designing responsive website - 
1. DESKPTOP-FIRST: You make the initial styling based on a desktop screen and then you add 
media queries to make it work on mobile screens. You add media queries for smaller screen sizes. (this is the more common usual way)
2. MOBILE-FIRST: You make the initial styling based on a mobile screen and then you add media queries to make it work on desktop screens. You add media queries for larger screen sizes.

DESKTOP-FIRST - MAX-WIDTH - DECREASING ORDER
MOBILE-FIRST - MIN-WIDTH - INCREASING ORDER

MEDIA-TYPES:
There are 4 media-types in media queries - screen, print, speech, all
screen - the styles will be applied only if you are on your browser screen on a device
print - the styles will be applied only on the paper if you're printing it
all - the styles will be applied to all the media types
speech - the styles will be applied to when a speec bot reads the website
@media print and (min-width: 1200px) and (max-width: 1500px), 
       screen and (min-width: 1200px) and (max-width: 1500px) {
    p {
        color: orange;
    }
}