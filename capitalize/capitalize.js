export default function capitalize(str) {
    if (typeof str !== "string")
        throw new Error("can't capitalize a non string value");
    if (!str) return "";

    return str.charAt(0).toUpperCase() + str.slice(1);
}
