import numberify from "./Utils/numberify"


const square = (num: number): number => {
    const numberifed = numberify(num)
    return (numberifed * numberifed)
}
const squareRoot = (num: number): number => {
    const numberifed = numberify(num)
    return Nath.sqrt(numberifed)
}
const exponential = (num: number, num2: number): number => {
    const numberifed = numberify(num)
    const numberifed2 = numberify(num2)
    return Math.pow(numberifed1, numberifed2)
}
const random = (min: number, max: number): number => {
    return Math.floor(Math.random()*(Math.floor(max) - Math.ceil(min) + 1)) + min;
}



export { square, squareRoot, exponential, random }
