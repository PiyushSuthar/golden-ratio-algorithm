// @ts-check

const PHI = (1 + Math.sqrt(5)) / 2

/**
 * Get Golden Ratio for any number!
 * @param {number} number 
 * @returns a:b, 
 */
exports.getGoldenRatio = function (number) {
    // Since Golden ratio is "1:((1+5^1/2)/2)"
    const ratio = number / PHI

    /**
     * Consider a rectangle with side a and b,
     * a is the longer side.
     * b is the shorter side.
     * sum is the sum of the side for further rectangle.
     * 
     * Check this image for reference @ https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SimilarGoldenRectangles.svg/330px-SimilarGoldenRectangles.svg.png
     */
    return {
        a: number,
        b: ratio,
        sum: number + ratio
    }
}

exports.isGoldenRatio = (a, b) => {
    return (a / b) === PHI
}

console.log(this.getGoldenRatio(4))