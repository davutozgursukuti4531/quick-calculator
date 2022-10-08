import numberify from "./Utils/numberify"


const square = (num: number) => {
    const numberifed = numberify(num)
    return (numberifed * numberifed)
}
const squareRoot = (num: number) => {
    const numberifed = numberify(num)
    return Nath.sqrt(numberifed)
}



export { square, squareRoot }
