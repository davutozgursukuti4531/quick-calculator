import numberify from "./Utils/numberify"


const square = (num: number) => {
    const numberifed = numberify(num)
    return (numberifed * numberifed)
}



export { square }
