// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
const ball = document.querySelector('.ball');
let positionX = 0;
let velocityx = 1;
//let positionY = 
// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {
    positionX += velocityx;
    ball.style.left = `${positionX}px`;

    if (positionX > GAME_AREA_HEIGHT) {
        positionX = 0;
    }

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    if (computerPaddleYPosition > GAME_AREA_WIDTH) {
        computerPaddleYPosition = 0;
    }
}
    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    // ball.style.left = `${positionX}px`;

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);



// let ballPosition = 0;
// let ballVelocity = 1;
// let positionX = 100;

// function bounce() {
//     ballPosition = ballPosition + ballVelocity;

//     ballPosition = ballPosition % (GAME_AREA_HEIGHT - BALL_SIZE);

//     ball.style.top = `${ballPosition}px`;
// }

// function loop2() {
//     bounce();
//     window.requestAnimationFrame(loop2);
// }
// window.requestAnimationFrame(loop2);
