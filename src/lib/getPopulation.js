const axios = require("axios")

const getPopulation = (state) => {
    const apiKey = "nJmzUUlan6qMXTWGlwqrLTZYFAbptltoSfj3uXJ0"

    return axios.get(`https://api.usa.gov/crime/fbi/sapi/api/participation/states/${state}?API_KEY=${apiKey}`)

}

module.exports = getPopulation