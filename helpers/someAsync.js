const fetch = require('node-fetch')

module.exports = async text => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      search: text
    })
  }
  const response = await fetch('https://httpbin.org/post', options).then(response =>
    response.json()
  )

  const body = JSON.parse(response.data)

  return body.search
}
