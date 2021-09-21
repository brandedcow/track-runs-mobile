import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation/Navigation';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(granted => {
        if (!granted) {
          console.log('not granted, request');
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'TrackRuns Location Permission',
              message: 'enable to track runs',
              buttonPositive: 'OK',
            },
          );
        }
      })
      .catch(err => console.log('error', err));
  }, []);

  const permissionsGranted = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  )
    .then(granted => granted)
    .catch(err => err);

  console.log('permissions', permissionsGranted);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
