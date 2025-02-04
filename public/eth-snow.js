// eth-snow.js

// Function to create a snowflake (Ethereum logo)
function createSnowflake() {
    console.log('Creating snowflake...'); // Debugging
    const snowflake = document.createElement('img');
    snowflake.src = '/ethlogo.png'; // Path to your Ethereum logo
    snowflake.classList.add('snowflake');

    // Randomize size
    const size = Math.random() * 30 + 20; // Between 20px and 50px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Randomize starting position
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;

    // Randomize animation duration (falling speed)
    const duration = Math.random() * 10 + 10; // Between 10s and 20s
    snowflake.style.animationDuration = `${duration}s`;

    // Append the snowflake to the body
    document.body.appendChild(snowflake);
    console.log('Snowflake appended to body:', snowflake); // Debugging

    // Remove the snowflake after it falls
    snowflake.addEventListener('animationend', () => {
        console.log('Snowflake animation ended, removing...'); // Debugging
        snowflake.remove();
    });
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 3000); // Adjust interval for more/less snowflakesß