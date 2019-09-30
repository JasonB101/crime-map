const colorBuilder = (population, amount, max, min, average) => {
    const perPop = population / amount > average ? average : population / amount

    let number = Math.round(230 * (perPop - min) / (average - min)) 
    // if (number > 230) number = 230
    console.log(max)
    console.log(average)
    console.log(number)
    // console.log(amount, max, number)
    return `rgb(255,${number},${number})`;
}

module.exports = colorBuilder