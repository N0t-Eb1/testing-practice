import calculator from "./calculator";

test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});
