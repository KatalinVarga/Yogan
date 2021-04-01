
function changeImage() {                    /* based on an example at https://wlearnsmart.com/javascript-change-image-onclick-event/ */

    var Image_Id = document.getElementById('glassJar'); /*queries the id of the image element*/
    if (Image_Id.src.match("img/jar.jpg")) {      /* if this is the source for the jar image*/
        Image_Id.src = "img/yoganbox.png";          /* than it changes the source to the image of the Yogan box*/
    }
    else {
        Image_Id.src = "img/jar.jpg";           /* otherwise it stays the jar image - if function is not activated - it is activated by hovering over the image as defined in the html tag*/
    }
} 
