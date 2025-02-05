// eth-snow.js

let snowflakeCount = 0; // Track the number of snowflakes
const maxSnowflakes = 5; // Maximum number of snowflakes allowed

function createSnowflake() {
    if (snowflakeCount >= maxSnowflakes) {
        return; // Stop creating new snowflakes if the limit is reached
    }

    const snowflake = document.createElement('img');
    snowflake.src = '/ethlogo.png';
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

    // Randomize opacity (between 0.2 and 0.5 for subtle transparency)
    const opacity = Math.random() * 0.3 + 0.2; // Between 0.2 and 0.5
    snowflake.style.opacity = opacity;

    // Append the snowflake to the body
    document.body.appendChild(snowflake);
    snowflakeCount++; // Increment the snowflake count

    // Remove the snowflake after it falls
    snowflake.addEventListener('animationend', () => {
        console.log('Snowflake removed'); // Debugging
        snowflake.remove();
        snowflakeCount--; // Decrement the snowflake count
    });
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 4000); // Adjust interval for fewer snowflakes