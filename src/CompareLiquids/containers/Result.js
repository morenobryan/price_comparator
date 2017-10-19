// @flowsetRollWidthRef
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import {
  calculateBestProduct,
  calculateEconomyPercentage,
  calculatePricePerUnitProductOne,
  calculatePricePerUnitProductTwo,
} from '../selectors';

import ResultPage from '../../shared/components/ResultPage';

const mapStateToProps = state => ({
  bestProduct: calculateBestProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
  backPage: 'CompareLiquids',
});

export default connect(mapStateToProps)(ResultPage);
