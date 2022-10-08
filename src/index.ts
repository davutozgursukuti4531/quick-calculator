import numberify from "./Utils/numberify"


const square = (num: number): number => {
    const numberifed = numberify(num)
    return (numberifed * numberifed)
}
const squareRoot = (num: number): number => {
    const numberifed = numberify(num)
    return Nath.sqrt(numberifed)
}
const exponential = (num: number, num2: number) => {
    const numberifed = numberify(num)
    const numberifed2 = numberify(num2)
    return numberifed * (numberifed * numberifed2)
}



export { square, squareRoot, exponential }
