import React, { PropTypes } from 'react'
import ConnectedOption from '../ConnectedComponents/ConnectedOption'

const ConfigBuilder = ({ allPossibleOptions }) => (
  <div>
    {allPossibleOptions.map( option =>
      <ConnectedOption
        key={option}
        option={option}
      />
    )}
  </div>
)

ConfigBuilder.propTypes = {}

export default ConfigBuilder
