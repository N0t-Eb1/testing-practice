import reverseString from "./reverse-string";

test("reverses a single word", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverses multiple words", () => {
    expect(reverseString("hello there")).toBe("ereht olleh");
});

test("works with numbers and punctuation", () => {
    expect(reverseString("123! abc!")).toBe("!cba !321");
});

test("works with blank strings", () => {
    expect(reverseString("")).toBe("");
});

test("throws an error if input is not a string", () => {
    expect(() => reverseString(123)).toThrow(
        "can't reverse a non string value"
    );
});
