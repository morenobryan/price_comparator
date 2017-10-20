// @flow
import { connect } from 'react-redux';
import { reset } from 'redux-form';

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
  backPage: 'ComparePaper',
});

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch(reset('comparePaperProductTwo'));
    dispatch(reset('comparePaperProductOne'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
