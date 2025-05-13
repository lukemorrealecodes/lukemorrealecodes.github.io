'use strict';

const imageArray = [
  'https://wallpaperaccess.com/full/6285469.jpg',
  'https://pixelz.cc/wp-content/uploads/2018/07/hiking-northern-sweden-uhd-4k-wallpaper.jpg',
  'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
  'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg',
  'https://wallpapercrafter.com/desktop/15701-autumn-forest-trail-leaves-fallen-trees-turn-4k.jpg',
];

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-image');

  // Update images when the left button is clicked
  document.querySelector('#left_button').addEventListener('click', (evt) => {
    let first = imageArray.shift(); // Get the first image path
    imageArray.push(first); // Move it to the end of the array

    // Update the image sources
    for (let i = 0; i < images.length; i++) {
      images[i].src = imageArray[i];
    }
  });

  // Update images when the right button is clicked
  document.querySelector('#right_button').addEventListener('click', (evt) => {
    let last = imageArray.pop(); // Get the last image path
    imageArray.unshift(last); // Move it to the beginning of the array

    // Update the image sources
    for (let i = 0; i < images.length; i++) {
      images[i].src = imageArray[i];
    }
  });
});
