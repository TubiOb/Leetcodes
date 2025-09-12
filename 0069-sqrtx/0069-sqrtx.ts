function mySqrt(x: number): number {
    let guessNumber = x;
    let accuracy = 0.000001;

    while ((guessNumber - x / guessNumber) > accuracy) {
        guessNumber = (guessNumber + x / guessNumber) / 2;
    }

    return guessNumber | 0;
};