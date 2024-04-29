import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from '../reducers/reducer';

const enhancer = devToolsEnhancer();

const store = createStore(reducer, enhancer);

export default store;
