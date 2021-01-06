/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./src/styles/app.scss")

require("lazysizes")
require("lazysizes/plugins/aspectratio/ls.aspectratio")
require("lazysizes/plugins/respimg/ls.respimg")
require("lazysizes/plugins/bgset/ls.bgset")

// exports.onServiceWorkerUpdateFound = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   )
//   if (answer === true) {
//     window.location.reload()
//   }
// }
