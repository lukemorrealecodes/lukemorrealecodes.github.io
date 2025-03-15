"use strict"

const imageArray = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"];

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    // Update images when the left button is clicked
    document.querySelector("#left_button").addEventListener("click", evt => {
        let first = imageArray.shift();  // Get the first image path
        imageArray.push(first);          // Move it to the end of the array

        // Update the image sources
        for (let i = 0; i < images.length; i++) {
            images[i].src = imageArray[i];
        }
    });

    // Update images when the right button is clicked
    document.querySelector("#right_button").addEventListener("click", evt => {
        let last = imageArray.pop();     // Get the last image path
        imageArray.unshift(last);        // Move it to the beginning of the array

        // Update the image sources
        for (let i = 0; i < images.length; i++) {
            images[i].src = imageArray[i];
        }
    });
});
