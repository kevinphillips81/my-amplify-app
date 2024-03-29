const axios = require('axios')

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, _, callback) => {
    let apiUrl = `https://api.coinlore.com/api/tickers/?start=1&limit=10`

    if (event.arguments) { 
        const { start = 0, limit = 10 } = event.arguments
        apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`
    }

    axios.get(apiUrl)
        .then(response => callback(null, response.data.data))
        .catch(err => callback(err))
};
