// @flow
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import {
  calculateWorstProduct,
  calculateEconomyPercentage,
  calculatePricePerUnitProductOne,
  calculatePricePerUnitProductTwo,
} from '../selectors';
import ResultPage from '../../shared/components/ResultPage';
import { red } from '../../shared/styles';

const mapStateToProps = state => ({
  worstProduct: calculateWorstProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
  backPage: 'ComparePaper',
  baseUnit: 'metro',
  titleColor: red,
  buttonColor: red,
  bestProductBackgroundColor: red,
});

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch(reset('comparePaperProductTwo'));
    dispatch(reset('comparePaperProductOne'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
