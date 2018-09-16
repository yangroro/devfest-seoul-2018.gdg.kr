import React, { Component } from "react";

export default class Ga extends Component {
  render() {
    return (
      <amp-analytics type="googleanalytics">
        <script type="application/json">{`
          {
            "vars": {
            "account": "UA-114028926-1"
          },
            "triggers": {
            "trackPageview": {
            "on": "visible",
            "request": "pageview"
          }
          }
          }
        `}</script>
      </amp-analytics>
    );
  }
}