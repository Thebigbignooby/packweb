import React, { PropTypes } from 'react'

const Packages = ({ packages }) => (
  <div>
    <hr/>
      npm install --save-dev webpack { packages.join(' ') }
    <hr/>
  </div>
)

Packages.propTypes = {}

export default Packages
