import React, { PropTypes } from 'react'

import ConnectedOption from '../ConnectedComponents/ConnectedOption'
import { allPossibleOptions } from '../../knowledge-base/webpackConfigOptions'

const ConfigBuilder = () => (
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
