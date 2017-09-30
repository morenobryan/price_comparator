import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const form = formValueSelector('comparePaper');
