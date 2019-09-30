const getOffenseCount = require("./getOffenseCount")
const getPopulation = require("./getPopulation")

const buildDataObject = () => {

    const states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
        "MN", "MS", "MO", "MT",
        // "NE",
        "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
        "VT", "VA", "WA", "WV", "WI", "WY"
    ]

    const dataObject = {}

    states.forEach((state) => {
        getOffenseCount(state)
            .then(result => {
                let dataArray = result.data.results
                dataObject[state] = {}
                dataArray.forEach(item => {
                    let year = String(item.data_year)
                    dataObject[state][year] = item
                })

                getPopulation(state)
                    .then(results => {
                        let dataArray = results.data.results
                        dataArray.forEach(item => {
                            let year = String(item.data_year)
                            if (!dataObject[state][year]) dataObject[state][year] = {}
                            dataObject[state][year].population = item.population

                        })
                    })

            })
    })


    return dataObject

}

module.exports = buildDataObject
