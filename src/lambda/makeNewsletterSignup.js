// const request = require("request")
const fetch = require("node-fetch").default
const btoa = require("btoa")

export function handler(event, context, callback) {
  const bodyJson = JSON.parse(event.body)

  const User_id = "9874"
  const Api_key = "024219c09741cff4d8ecec693876136bf1b8664e"

  function authenticateUser(user, password) {
    var token = user + ":" + password
    var hash = btoa(token)

    return "Basic " + hash
  }

  // Create Auth token
  const token = authenticateUser(User_id, Api_key)

  fetch(
    "https://subscribers.dialogapi.no/api/public/v2/subscribers?subscriber_list_id=9447",
    {
      body: JSON.stringify(bodyJson),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  )
    .then(res => res.json())
    .then(res => {
      if (res.status === "200 Success" && res.id) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            res,
            bodyJson,
          }),
        })
      } else {
        callback("Newsletter signup failed")
      }
    })
}
