const request = require("request")

export function handler(event, context, callback) {
  const bodyJson = JSON.parse(event.body)

  const formData = {
    f: "2159",
    k: "8858",
    a: "on",
    subscriber_list_ids: "35115",
    email: bodyJson.email,
  }

  request.post(
    { url: "https://ext.mnm.as/subscribe.asp", form: formData },
    (error, resp, body) => {
      if (!error && body) {
        // Will return body with redirect back to oyafestivalen.no
        // Usually code 302, but let's not check that in case of change
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            resp,
            formData,
          }),
        })
      } else {
        callback("Oh no! The newsletter signup failed.")
      }
    }
  )
}
