export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFrameRange(action) {
    const actions = {
        walk: createArray(7, 14),
        run: createArray(17, 24),
        lie: createArray(27, 35),
    };

    return actions[action];
}

function createArray(leftBound, rightBound) {
    var arrayLike = Array.from(
        { length: rightBound - leftBound },
        (_, index) => index + leftBound
    );

    var array = Array.from(arrayLike);

    return array;
}

