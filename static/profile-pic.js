// Get the profile picture element
const profilePic = document.getElementById('profile-pic');

// Add a click event listener to the profile picture
profilePic.addEventListener('click', () => {
    // Check the current source and toggle to the other image
    if (profilePic.src.endsWith('jonas_original.jpg')) {
        profilePic.src = 'jonas_wink.jpg'; // Change to the winking image
    } else {
        profilePic.src = 'jonas_original.jpg'; // Change back to the original image
    }
});