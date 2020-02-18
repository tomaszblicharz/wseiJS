function checkBallInHole(ball, hole) {
    let SideOfBallX = ball.x;
    let SideOfBallY = ball.y;
    let bottomSideOfBallY = ball.y + ball.size;
    let rightSideOfBallX = ball.x + ball.size;

    let SideOfHoleX = hole.x;
    let SideOfHoleY = hole.y;
    let bottomSideOfHoleY = hole.y + hole.size;
    let rightSideOfHoleX = hole.x + hole.size;
    if ((SideOfBallX > SideOfHoleX && rightSideOfBallX < rightSideOfHoleX) && (SideOfBallY > SideOfHoleY && bottomSideOfBallY < bottomSideOfHoleY)) {
        return true;
    } else {
        return false;
    }
}