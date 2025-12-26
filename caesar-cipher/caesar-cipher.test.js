import caesarCipher from "./caesar-cipher";

test("shifts lowercase letters correctly", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("shifts uppercase letters correctly", () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("wraps from Z to A", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("handles mixed case strings", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
