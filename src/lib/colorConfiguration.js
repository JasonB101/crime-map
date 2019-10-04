const colorBuilder = require("./colorBuilder")

const colorConfiguration = (stateData, currentSelection) => {
    let customObj = {}
    let maxAmount = []

    //Get average amount of arrests per capita
    for (let state in stateData) {
        let currentStateYear = stateData[state][currentSelection[0]]
        if (currentStateYear && currentStateYear[currentSelection[1]] > 20) {
            let perPop = Math.floor(currentStateYear.population / currentStateYear[currentSelection[1]])
            maxAmount.push(perPop)
        }
    }

    let average = Math.floor(maxAmount.reduce((sum, x) => sum + x, 0) / maxAmount.length)
    //Generate a color for each state
    for (let state in stateData) {
        let amount = stateData[state][currentSelection[0]] ? stateData[state][currentSelection[0]][currentSelection[1]] || 0 : 0
        let population = stateData[state][currentSelection[0]] ? stateData[state][currentSelection[0]].population : 0
        if (amount !== 0 && population !== 0) {
            customObj[state] = {
                fill: colorBuilder(population, amount, Math.min(...maxAmount), average),
                clickHandler: () => alert(`There was ${amount} arrests for ${currentSelection[1]} in the year ${currentSelection[0]}` +
                    ` and the population in this state was ${population}`)
            }
        }
    }

    return customObj

}

module.exports = colorConfiguration