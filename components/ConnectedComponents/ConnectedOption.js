import { connect } from 'react-redux'

import { toggleOption } from '../../actions'
import Option from '../Option'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggle: () => {
      dispatch(toggleOption(ownProps.option))
    }
  }
}

const ConnectedOption = connect(
  null,
  mapDispatchToProps
)(Option)

export default ConnectedOption
