



//Use querySelector to select an object from the DOM (Document Object Model)
var btn = document.querySelector('.mobileNavBTN');
var menu = document.querySelector('.menu');

//Attach an event listener to the element, that listens for a click
btn.addEventListener('click', ()=>{
    menu.classList.toggle('hide');
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 935){
        btn.classList.add('hide');
        menu.classList.remove('hide');
    } else if(window.innerWidth < 935){
        btn.classList.remove('hide');
        menu.classList.add('hide');
    }
});

window.addEventListener('load', ()=>{  /* I have added this so the burger menu would also appear after re-freshing the page*/
    if(window.innerWidth > 935){
        btn.classList.add('hide');
        menu.classList.remove('hide');
    } else if(window.innerWidth < 935){
        btn.classList.remove('hide');
        menu.classList.add('hide');
    }
});



function changeImage() {                    /* This script is based on an example at https://wlearnsmart.com/javascript-change-image-onclick-event/ */
                                            /* The purpose of this script is to change 3 images at the bottom of the landing page when the function is activated */
                                            /* the function is activated by clicking on the image #glassJar as defined in the index.html */
   

  

    var Image_Id = document.getElementById('glassJar'); /*this variable contains the result of a query looking for the id of the image element*/

   
    if (Image_Id.src.match("img/glassjar.png")) {           /* if the source of the image is the one for the jar image*/
        Image_Id.src = "img/yoganbox.svg";   
                                                        /* than it changes the source to the image of the Yogan box*/
         
    }
    else if  (Image_Id.src.match("img/yoganbox.svg")) {      /* I have also added a 3rd image (the example olny contained 2 interchangeable images) with the else if statements*/
            Image_Id.src = "img/cardboardbox.png";          /*after clicking on the Yogan box, the image changes to the paperbox with the handle*/
    
    }
    else if  (Image_Id.src.match("img/cardboardbox.png")) {
    Image_Id.src = "img/glassjar.png";   
    }
} 

