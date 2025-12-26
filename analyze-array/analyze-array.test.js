import analyzeArray from "./analyze-array";

test("analyzes a standard array of numbers", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("handles an array with a single number", () => {
    const result = analyzeArray([5]);

    expect(result).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1,
    });
});

test("handles negative numbers", () => {
    const result = analyzeArray([-1, -5, 0, 2]);

    expect(result).toEqual({
        average: -1,
        min: -5,
        max: 2,
        length: 4,
    });
});

test("throws error when input is not an array", () => {
    expect(() => analyzeArray("1, 2, 3")).toThrow("invalid input");
    expect(() => analyzeArray(123)).toThrow("invalid input");
    expect(() => analyzeArray({ a: 1, b: 2 })).toThrow("invalid input");
});

test("throws error when array is empty", () => {
    expect(() => analyzeArray([])).toThrow("invalid input");
});
