function lengthOfLastWord(s: string): number {
    const subString = s.trim().split(' ');
    const lastWord = subString[subString.length - 1]
    return lastWord.length;
};