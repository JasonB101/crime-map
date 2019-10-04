import React, { useState, useEffect } from 'react'
import USAMap from 'react-usa-map'
import ControlPanel from './components/ControlPanel/ControlPanel';
const { buildDataObject, colorConfiguration } = require("./lib/index")

const App = () => {
    const [stateData, setStateData] = useState({})
    const [loading, setLoading] = useState(true)
    const [currentSelection, changeSelection] = useState(["2017", "murder"])

    useEffect(() => {
        let fetchData = () => {
            let stateObj = buildDataObject()
            //State object is being returned, but buildDataObject continues to add to 
            // the object in memory as the promises are being resolved. Need to find a way to 
            // determine when the object is finished being built before changing the loading status.
            setStateData(stateObj)
        }
        fetchData();
    }, [])

    const mapHandler = (event) => {
        alert(event.target.dataset.name)
    }

    return (
        <div className="app-wrapper">
            <ControlPanel stateData ={stateData} 
                            inputChange={[currentSelection, changeSelection]}
                            loading = {[loading, setLoading]} />
            <USAMap customize={colorConfiguration(stateData, currentSelection)} onClick={mapHandler} />
            <h1>Site still under construction!</h1>

        </div>
    )
}

export default App
