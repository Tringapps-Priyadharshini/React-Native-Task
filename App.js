import 'react-native-gesture-handler'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './src/redux/reducers'
import rootSaga from './src/redux/sagas';
import { Provider } from 'react-redux';
import Ecommerce from './src/components/Ecommerce';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return (
    <Provider store={store}>
      <Ecommerce/>
    </Provider>
  );
};

export default App;
