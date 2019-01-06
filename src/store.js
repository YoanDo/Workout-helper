import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import duedates from './reducers/indexReducer';

export default compose(applyMiddleware(thunk))(createStore)(duedates);
