// script.js

// Function to change background color and store preference in localStorage
function changeBackgroundColor() {
  const currentColor = localStorage.getItem('backgroundColor') || 'white';
  
  // Toggle background color between white and lightblue
  const newColor = currentColor === 'white' ? 'lightblue' : 'white';
  document.body.style.backgroundColor = newColor;
  
  // Store the new color in localStorage
  localStorage.setItem('backgroundColor', newColor);
}

// Function to trigger animation on image click
function animateImage() {
  const image = document.getElementById('animatedImage');
  
  // Add animation class
  image.classList.add('animate');
  
  // Remove animation class after the animation ends (1s in our case)
  setTimeout(() => {
    image.classList.remove('animate');
  }, 1000); // Match the animation duration
}

// Check if the background color preference exists in localStorage and apply it
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});

// Add event listener for the button to change background color
document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);

// Add event listener for the image click to trigger animation
document.getElementById('animatedImage').addEventListener('click', animateImage);
