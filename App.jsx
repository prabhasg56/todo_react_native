import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Toast from 'react-native-toast-message';

import MainComponents from './src/navigation/MainComponents';

function App() {

  return (
    <>
      <MainComponents />
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
