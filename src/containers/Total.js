import { connect } from 'react-redux'
import Total from '../components/Total'

const mapstateToProps = (state) => {
  return {
    cars : state.cars
  }
}

export default connect(mapstateToProps)(Total)