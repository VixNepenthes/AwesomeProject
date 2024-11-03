// redux/sagas/index.js
import {all} from 'redux-saga/effects';
import {watchFetchTask, watchAddTask} from './taskSaga';

//TODO: including watchFetchTask and watchAddTask from taskSaga.js
export default function* rootSaga() {
  yield all([watchAddTask(), watchFetchTask()]);
}
