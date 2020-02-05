// function detectCollision(ball, gameObject) {
//     let bottomOfBall = ball.y + ball.size;
//     let topOfBall = ball.y;

//     let topOfObject = gameObject.y;
//     let leftSideOfObject = gameObject.x;
//     let rightSideOfObject = gameObject.x + gameObject.width;
//     let bottomOfObject = gameObject.y + gameObject.height;

//     if (
//         bottomOfBall >= topOfObject &&
//         topOfBall <= bottomOfObject &&
//         ball.x >= leftSideOfObject &&
//         ball.x + ball.size <= rightSideOfObject
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }