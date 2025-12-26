export default function caesarCipher(str, key) {
    return [...str].map(char => rotate(char, key)).join("");
}

function rotate(char, key) {
    if (/[a-z]/.test(char)) return getLetter(char, key, 97);
    if (/[A-Z]/.test(char)) return getLetter(char, key, 65);

    return char;
}

function getLetter(char, key, lowestASCII) {
    return String.fromCharCode(
        ((char.charCodeAt(0) - lowestASCII + key) % 26) + lowestASCII
    );
}
