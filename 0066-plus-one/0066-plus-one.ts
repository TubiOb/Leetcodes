function plusOne(digits: number[]): number[] {
    let int = BigInt(digits.join(''))
    console.log(int)
    int++;
    console.log(int)
    const digitArray = Array.from(String(int), Number);
    console.log(digitArray)
    return digitArray;
};