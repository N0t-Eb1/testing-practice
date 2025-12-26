import capitalize from "./capitalize";

test("capitalizes the first character of a lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("works with single character strings", () => {
    expect(capitalize("a")).toBe("A");
});

test("keeps the string the same if already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test("does not change the case of the rest of the string", () => {
    expect(capitalize("hELLo")).toBe("HELLo");
});

test("handles an empty string gracefully", () => {
    expect(capitalize("")).toBe("");
});

test("handles strings that start with non-letters", () => {
    expect(capitalize("123hello")).toBe("123hello");
    expect(capitalize("!hello")).toBe("!hello");
});

test("throws error when provided with a non string value", () => {
    expect(() => capitalize(123)).toThrow(
        "can't capitalize a non string value"
    );
});
