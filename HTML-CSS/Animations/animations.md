transform: rotate(15deg); -> positive degrees rotates it in clockwise direction
transform: rotate(-15deg); -> negative degrees rotates it in anticlockwise direction

transform: scale(2); -> elongates the width and height by 2x
transform: scale(2, 3); -> elongates the width by 2x but the height by 3x
transform: scaleX(2);
transform: scaleY(2);

transform: translate(100px); -> moves the div to its right by 100x. right because the value is in positive.
transform: translate(-100px); -> moves the div to its left by 100px. left because the value is in negative.
transform: translate(100px, 200px); -> moves the div to its right by 100px and to its bottom by 200px. 
So, right is positive and bottom is positive. Left is negative and top is negative. 

transform: rotate(15deg) scale(2) translate(100px); -> you may give multiple things also together.

transition: width 5s ease-out; -> whenever I have a change that I don't want to happen instantenously. 

@keyframes changeShape {
    from {
        border-radius: 0%;
    }
    to {
        border-radius: 100%;
    }
}
animation: changeShape 2s infinite alternate; -> changeShape is the name of the animation. 2s is the time fo 1 loop or 1 iteration. inifinite is the number of times you want to run the animation. You can have an integer also here. Alternate neans that both from-to-to and to-to-from will now be slow.
This is the short form for applying animations.

This is the long-form:
animation-name: bounceBall;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-direction: alternate;
If you have multiple animations to give, then you have to give them in the long format and not in the short format. It is not syntactically possible to give in the short format.

If you have multiple animations then don't change the same attribute in both the animations. The second one will override the first one. For example, transform is not additive, only one of them takes effect at a time.
In different animations, affect or play with different properties.

@keyframes bounceBall {
    0% {
        transform: translateY(0);
    }
    12.5% {
        transform: translateY(400px);
    }
    25% {
        transform: translateY(0px);
    }
    37.5% {
        transform: translateY(200px);
    }
    50% {
        transform: translateY(0px);
    }
    62.5% {
        transform: translateY(100px);
    }
    75% {
        transform: translateY(0px);
    }
    87.5% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
}
Every step happens with respect to its initial position and not its new position. 

CDN(Content Delivery Network) - helps you to host certain programs or softwares and get access to them worldwide. There are CDN servers worldwide. 

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
Adding these 2 lines in your HTML File, gives you the access to many default styles writtenm by Bootstrap developers in CSS and JS file.
