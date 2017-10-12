// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import {
  calculateBestProduct,
  calculateEconomyPercentage,
  calculatePricePerUnitProductOne,
  calculatePricePerUnitProductTwo,
} from '../selectors';

import ComparePaperResult from '../components/ComparePaperResult';

const mapStateToProps = state => ({
  bestProduct: calculateBestProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
});

export default connect(mapStateToProps)(ComparePaperResult);
