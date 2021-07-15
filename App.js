/**
 * On The Card v1 Mobile App
 * Created by: Benjamin Le
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import RootNavigator from './src/navigation/rootNavigator';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/store/rootReducer';

const App = () => {
  const store = createStore(rootReducer);

  const [assetsLoaded, setAssetsLoaded] = React.useState(false);

  const _cacheResourcesAsync = async () => {
    const images = [
      require('./src/assets/images/flag_english.png'),
      require('./src/assets/images/flag_vietnam.png'),
      require('./src/assets/images/footer_icon.png'),
      require('./src/assets/images/logo.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!assetsLoaded) {
    return (
      <AppLoading 
      startAsync={_cacheResourcesAsync}
      onFinish={() => { setAssetsLoaded(true) }}
      onError={console.log}
      />
    );
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;