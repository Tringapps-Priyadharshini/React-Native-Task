import 'react-native-gesture-handler'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './src/redux/reducers'
import rootSaga from './src/redux/sagas';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import Container from './src/components/Container';
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './src/components/atoms/ActivityIndicator/Loading';

const App = () => {

  const persistConfig = {
    key: 'cart',
    storage: AsyncStorage
  }
  const persistedReducer = persistReducer(persistConfig, reducer)

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga)
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
};

export default App;
