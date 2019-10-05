import React, { useState, useEffect} from 'react'
import USAMap from 'react-usa-map'
import ControlPanel from './components/ControlPanel/ControlPanel';
const { buildDataObject, colorConfiguration } = require("./lib/index")

const App = () => {
    const [stateData, setStateData] = useState({original: true})
    const [loading, setLoading] = useState(true)
    const [currentSelection, changeSelection] = useState(["1985", "rape"])

    useEffect(() => {
    
        if (stateData.original){
            setStateData(buildDataObject())
        }
    }, [loading, stateData, currentSelection])


    const mapHandler = (event) => {
        alert(event.target.dataset.name)
    }

    return (
        <div className="app-wrapper">
            <ControlPanel stateData={[stateData, setStateData]}
                inputChange={[currentSelection, changeSelection]}
                loading={[loading, setLoading]} />
            {loading ? <USAMap /> : <USAMap customize={colorConfiguration(stateData, currentSelection)} 
                                            onClick={mapHandler} />}
            <h1>Site still under
                 construction!</h1>

        </div>
    )
}

export default App
