function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return undefined;
    }
    let output = '';
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str.charAt(i) === strs[0][i])) {
            output += strs[0][i];
        }
        else {
            break;
        }
    }
    return output;
};