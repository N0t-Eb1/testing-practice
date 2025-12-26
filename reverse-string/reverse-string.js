export default function reverseString(str) {
    if (typeof str !== "string")
        throw new Error("can't reverse a non string value");

    return [...str].reverse().join("");
}
