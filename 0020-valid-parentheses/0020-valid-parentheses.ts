function isValid(s: string): boolean {
    const pattern = {')': '(', '}': '{', ']': '['};
    const opening = ['(', '{', '['];

    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (opening.includes(currentBracket)) {
            stack.push(currentBracket);
        }
        else if (stack.pop() !== pattern[currentBracket]) {
            return false;
        }
    }
    return !stack.length;
};