import React from 'react'
import Styles from "./ControlPanel.module.css"
import DropDown from "react-drop-down"

const ControlPanel = (props) => {
    const [currentSelection, changeSelection] = props.inputChange
    const [loading, setLoading] = props.loading
    const offenseOptions = ["murder", "sex_offense", "arson", "fraud", "offense_family",
        "prostitution", "rape", "drug_poss_m"];

    setTimeout(() => setLoading(false), 5000)
    return (
        <div className="control-panel">
            {loading && <h3>Loading...</h3>}
            
            {!loading && <>
                <h3>Select a year:</h3>
                <DropDown value={currentSelection[0]}
                    onChange={(e) => changeSelection([String(e), currentSelection[1]])}
                    options={function () {
                        let years = [];
                        for (let i = 2017; i > 1984; i--) {
                            years.push(String(i))
                        }
                        return years
                    }()} />

                <h3>Select a Crime:</h3>
                <DropDown value={currentSelection[1]} onChange={(e) =>
                    changeSelection([currentSelection[0], e])}
                    options={offenseOptions} />
            </>
            }
        </div>
    )
}

export default ControlPanel
