'use strict'

const axios = require('axios')
const Papa = require('papaparse')

module.exports.convert = (event, context, callback) => {
  const url = event.queryStringParameters.url

  axios.get(url).then((dkanResponse) => {
    const statusCode = dkanResponse.status

    if (statusCode < 200 || statusCode >= 300) {
      const errorResponse = { statusCode: statusCode }
      callback(null, errorResponse)
      return
    }

    const csv = Papa.unparse(dkanResponse.data.result.records)

    const convertedResponse = {
      statusCode: statusCode,
      headers: {
        'content-type': 'text/csv',
        'content-disposition': 'attachment;filename=data.csv'
      },
      body: csv
    }
    callback(null, convertedResponse)
  })
  .catch((error) => {
    const errorResponse = {
      statusCode: 500,
      body: error
    }
    callback(null, errorResponse)
  })
}
