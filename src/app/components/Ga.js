import React, { Component } from "react";

export default class Ga extends Component {
  render() {
    return (
      <amp-analytics type="googleanalytics">
        <script type="application/json" dangerouslySetInnerHTML={{
          __html: `
            {
              "vars": {
                "account": "UA-125825521-1"
              },
              "triggers": {
                "trackPageview": {
                  "on": "visible",
                  "request": "pageview"
                }
              }
            }
          `
        }}></script>
      </amp-analytics>
    );
  }
}