import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapstateToProps = (state) => {
  return {
    cars : state.cars
  }
}

export default connect(mapstateToProps)(Chart)