"use strict"

const imageArray: string[] = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"];

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    const leftButton = document.querySelector("#left_button");
    const rightButton = document.querySelector("#right_button");

    console.log(images.length); // Check how many images are being selected

    if (leftButton && rightButton) {
        leftButton.addEventListener("click", () => {
            let first = imageArray.shift(); 
            console.log("Left Button Clicked, first image shifted: ", first);
            if (first) {  
                imageArray.push(first); 
            }

            // Update image sources
            for (let i = 0; i < images.length; i++) {
                images[i].src = imageArray[i];
                console.log(`Updated image ${i}: ${imageArray[i]}`);
            }
        });

        rightButton.addEventListener("click", () => {
            let last = imageArray.pop();
            console.log("Right Button Clicked, last image popped: ", last);
            if (last) { 
                imageArray.unshift(last); 
            }

            // Update image sources
            for (let i = 0; i < images.length; i++) {
                images[i].src = imageArray[i];
                console.log(`Updated image ${i}: ${imageArray[i]}`);
            }
        });
    } else {
        console.error("Buttons not found!");
    }
});
