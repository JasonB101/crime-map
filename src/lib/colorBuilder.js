const colorBuilder = (population, amount, min, average) => {
    let number;
    const perPop = Math.floor(population / amount)

    if (perPop > average) number = 240

    else number = Math.round(220 * (perPop - min) / (average - min)) 
   
    return `rgb(255,${number},${number})`;
}

module.exports = colorBuilder