// @flowsetRollWidthRef
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import {
  calculateWorstProduct,
  calculateEconomyPercentage,
  calculatePricePerUnitProductOne,
  calculatePricePerUnitProductTwo,
} from '../selectors';

import ResultPage from '../../shared/components/ResultPage';

const mapStateToProps = state => ({
  worstProduct: calculateWorstProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
  backPage: 'CompareSolids',
  baseUnit: 'grama',
});

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch(reset('compareSolidsProductOne'));
    dispatch(reset('compareSolidsProductTwo'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
