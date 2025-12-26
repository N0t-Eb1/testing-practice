export default function analyzeArray(nums) {
    if (
        !Array.isArray(nums) ||
        !nums.length ||
        nums.some(num => typeof num !== "number")
    )
        throw new Error("invalid input");

    return {
        average: nums.reduce((prev, curr) => prev + curr, 0) / nums.length,
        min: Math.min(...nums),
        max: Math.max(...nums),
        length: nums.length,
    };
}
