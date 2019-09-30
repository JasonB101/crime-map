import React, { useState, useEffect } from 'react'
import USAMap from 'react-usa-map'
import ControlPanel from './components/ControlPanel/ControlPanel';
const { buildDataObject, colorBuilder } = require("./lib/index")

const App = () => {
    const [stateData, setStateData] = useState({})
    const [currentSelection, changeSelection] = useState(["2017", "murder"])
    useEffect(() => {
        setStateData(buildDataObject())
    }, [])

    const mapHandler = (event) => {
        alert(event.target.dataset.name)
    }


    const statesCustomConfig = () => {
        let customObj = {}
        let maxAmount = []


            for (let state in stateData) {
                let currentStateYear = stateData[state][currentSelection[0]]
                if ( currentStateYear && currentStateYear[currentSelection[1]]) {
                    let perPop = Math.floor(currentStateYear.population / currentStateYear[currentSelection[1]])
                    maxAmount.push(perPop)
                }
            }

            let average = Math.floor(maxAmount.reduce((sum, x) => sum + x, 0) / maxAmount.length)
            for (let state in stateData) {
                let amount = stateData[state][currentSelection[0]] ? stateData[state][currentSelection[0]][currentSelection[1]] || 0 : 0
                let population = stateData[state][currentSelection[0]] ? stateData[state][currentSelection[0]].population : 0
                if (amount !== 0 && population !== 0) {
                    customObj[state] = {
                        fill: colorBuilder(population, amount, Math.max(...maxAmount), Math.min(...maxAmount), average),
                        clickHandler: () => alert(`There has been ${amount} ${currentSelection[1]}s in the year ${currentSelection[0]}`+ 
                                                    ` and the population was ${population}`)
                    }
                }
            }
    
        return customObj

    }


    return (
        <div className="app-wrapper">
            <ControlPanel inputChange={[currentSelection, changeSelection]} />
            <USAMap customize={statesCustomConfig()} onClick={mapHandler} />

        </div>
    )
}

export default App
