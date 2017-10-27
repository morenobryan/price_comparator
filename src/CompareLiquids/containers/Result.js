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
import { yellow } from '../../shared/styles';

const mapStateToProps = state => ({
  worstProduct: calculateWorstProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
  backPage: 'CompareLiquids',
  baseUnit: 'litro',
  titleColor: yellow,
  buttonColor: yellow,
  bestProductBackgroundColor: yellow,
});

export default connect(mapStateToProps)(ResultPage);
