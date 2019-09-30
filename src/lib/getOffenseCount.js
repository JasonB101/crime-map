const axios = require("axios")

const getOffenseCount = (state) => {
    const apiKey = "nJmzUUlan6qMXTWGlwqrLTZYFAbptltoSfj3uXJ0"
    return axios(`https://api.usa.gov/crime/fbi/sapi/api/data/arrest/states/offense/${state}/all/1985/2017?API_KEY=${apiKey}`)
}

module.exports = getOffenseCount