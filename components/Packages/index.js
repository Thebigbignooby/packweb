import React, { PropTypes } from 'react'

const Packages = ({ packages }) => (
  <div>
    <hr/>
      <code>
        npm install --save-dev webpack { packages.join(' ') }
      </code>
    <hr/>
  </div>
)

Packages.propTypes = {}

export default Packages
