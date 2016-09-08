import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'

const Option = ({ option, onToggle }) => (
    <Checkbox
      key={option}
      label={option}
      onCheck={ () => onToggle()}
    />
)

Option.propTypes = {}

export default Option
