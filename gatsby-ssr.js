/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <React.Fragment key="ssr-adform-tracking-code">
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window._adftrack = Array.isArray(window._adftrack)
    ? window._adftrack
    : window._adftrack
    ? [window._adftrack]
    : []
  window._adftrack.push({
    pm: 893314
  })
  ;(function() {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://track.adform.net/serving/scripts/trackpoint/async/'
    var x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)
  })();`,
        }}
      />
      <noscript>
        <p style={{ margin: 0, padding: 0, border: 0 }}>
          <img
            src="https://track.adform.net/Serving/TrackPoint/?pm=893314"
            width="1"
            height="1"
            alt=""
          />
        </p>
      </noscript>
    </React.Fragment>,
  ])
}
